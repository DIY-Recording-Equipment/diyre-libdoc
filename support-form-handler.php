<?php
/**
 * Generic handler for every support/contact form on the site.
 *
 * Every form just needs to POST here with enctype="multipart/form-data"
 * and its own set of fields — this script has no fixed/expected field
 * list. It reads a hidden `_subject` field for the email subject, then
 * builds the email body from every other $_POST field present (skipping
 * a small set of control fields), so a new form variant can be added on
 * any page without touching this file. See CLAUDE.md's "Support / contact
 * form" section for the conventions each form's markup should follow.
 *
 * Sends via PHPMailer over authenticated SMTP as the real
 * support@diyrecordingequipment.com mailbox (see mail-config.php /
 * mail-config.example.php) rather than PHP's mail(), so the message is
 * SPF/DKIM-aligned and isn't flagged as spam by receiving mail servers.
 */

declare(strict_types=1);

// Fields the handler treats as control/meta fields rather than
// message content — never included in the assembled email body.
const CONTROL_FIELDS = ['_subject', '_redirect', 'website'];

// Upload limits.
const MAX_FILES = 5;
const MAX_FILE_BYTES = 8 * 1024 * 1024;   // 8MB per file
const MAX_TOTAL_BYTES = 20 * 1024 * 1024; // 20MB total
const ALLOWED_MIME_TYPES = [
    'image/jpeg' => 'jpg',
    'image/png'  => 'png',
    'image/heic' => 'heic',
    'image/webp' => 'webp',
    'application/pdf' => 'pdf',
];

/**
 * Redirects back to the page the form was submitted from (same-host only,
 * to avoid becoming an open redirect) with a status query param appended,
 * falling back to /contact/ if there's no usable referer.
 */
function redirect_with_status(string $status): never
{
    $target = '/contact/';
    if (!empty($_SERVER['HTTP_REFERER'])) {
        $referer = parse_url($_SERVER['HTTP_REFERER']);
        if (!empty($referer['host']) && $referer['host'] === ($_SERVER['HTTP_HOST'] ?? '')) {
            $target = ($referer['path'] ?? '/contact/');
        }
    }
    $separator = str_contains($target, '?') ? '&' : '?';
    header('Location: ' . $target . $separator . $status);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Location: /contact/');
    exit;
}

// Honeypot: a real visitor never fills this in (it's hidden off-screen by
// CSS, see custom.css's .hp-field). If it's non-empty, silently pretend
// success so bots don't learn the field is being checked.
if (!empty($_POST['website'])) {
    header('Location: /contact/thanks/');
    exit;
}

$configPath = __DIR__ . '/mail-config.php';
if (!is_file($configPath)) {
    error_log('support-form-handler: mail-config.php is missing — see mail-config.example.php');
    redirect_with_status('error=config');
}
require $configPath;

require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_with_status('error=validation');
}

// Assemble the email body from every non-control POST field, in the order
// the form sent them, so each form's own field set shows up automatically.
$bodyLines = [];
foreach ($_POST as $field => $value) {
    if (in_array($field, CONTROL_FIELDS, true)) {
        continue;
    }
    if (is_array($value)) {
        $value = implode(', ', $value);
    }
    $label = ucwords(str_replace('_', ' ', $field));
    $bodyLines[] = "{$label}:\n" . trim((string) $value) . "\n";
}
$body = implode("\n", $bodyLines);

$subject = trim((string) ($_POST['_subject'] ?? 'Support Request'));
// Strip anything that could smuggle extra headers into the subject line.
$subject = preg_replace('/[\r\n]+/', ' ', $subject);

// Validate + collect attachments, if any were submitted.
$attachments = [];
if (!empty($_FILES['photos']) && is_array($_FILES['photos']['tmp_name'] ?? null)) {
    $files = $_FILES['photos'];
    $fileCount = count(array_filter($files['error'], fn($e) => $e !== UPLOAD_ERR_NO_FILE));
    if ($fileCount > MAX_FILES) {
        redirect_with_status('error=too_many_files');
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $totalBytes = 0;

    for ($i = 0; $i < count($files['tmp_name']); $i++) {
        if ($files['error'][$i] === UPLOAD_ERR_NO_FILE) {
            continue;
        }
        if ($files['error'][$i] !== UPLOAD_ERR_OK) {
            redirect_with_status('error=upload');
        }
        if ($files['size'][$i] > MAX_FILE_BYTES) {
            redirect_with_status('error=file_too_large');
        }
        $totalBytes += $files['size'][$i];
        if ($totalBytes > MAX_TOTAL_BYTES) {
            redirect_with_status('error=file_too_large');
        }

        $tmpPath = $files['tmp_name'][$i];
        if (!is_uploaded_file($tmpPath)) {
            redirect_with_status('error=upload');
        }
        $mimeType = $finfo->file($tmpPath);
        if (!isset(ALLOWED_MIME_TYPES[$mimeType])) {
            redirect_with_status('error=file_type');
        }

        $attachments[] = [
            'path' => $tmpPath,
            'name' => basename($files['name'][$i]) ?: ('photo.' . ALLOWED_MIME_TYPES[$mimeType]),
        ];
    }
}

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = MAIL_SMTP_HOST;
    $mail->Port = MAIL_SMTP_PORT;
    $mail->SMTPAuth = true;
    $mail->Username = MAIL_SMTP_USERNAME;
    $mail->Password = MAIL_SMTP_PASSWORD;
    $mail->SMTPSecure = MAIL_SMTP_ENCRYPTION;

    // PHPMailer defaults to ISO-8859-1; without this, any non-ASCII byte in
    // the subject/body (e.g. the em dash the subject is built with, or an
    // accented name) comes through as mojibake in the recipient's inbox.
    $mail->CharSet = 'UTF-8';

    // From must be the authenticated mailbox itself for SPF/DKIM alignment.
    $mail->setFrom(MAIL_SMTP_USERNAME, 'DIYRE Manuals Site');
    $mail->addAddress(MAIL_TO_ADDRESS, MAIL_TO_NAME);
    $mail->addReplyTo($email, $name);

    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->isHTML(false);

    foreach ($attachments as $attachment) {
        $mail->addAttachment($attachment['path'], $attachment['name']);
    }

    $mail->send();
} catch (PHPMailerException $e) {
    error_log('support-form-handler: PHPMailer failed to send: ' . $mail->ErrorInfo);
    redirect_with_status('error=send');
}

header('Location: /contact/thanks/');
exit;
