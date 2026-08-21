<?php
/**
 * Template for mail-config.php — the SMTP credentials support-form-handler.php
 * needs to send mail as support@diyrecordingequipment.com via PHPMailer.
 *
 * mail-config.php itself is NEVER committed to git (see .gitignore) and is
 * NEVER passthrough-copied by Eleventy (it is not listed in .eleventy.js),
 * so it never appears in _site/ and is never touched by the automated
 * rsync deploy in .github/workflows/deploy.yml. Instead, copy this file to
 * mail-config.php, fill in the real values below, and upload it BY HAND
 * once via SFTP/SSH directly into the same directory on SiteGround that
 * support-form-handler.php lives in (i.e. SITEGROUND_REMOTE_PATH's root).
 * The deploy's rsync has no --delete flag, so it will never remove or
 * overwrite a file that isn't present in the locally-built _site/ — this
 * file is safe there indefinitely, across every future automated deploy.
 *
 * See CLAUDE.md's "Support / contact form" section for the full one-time
 * upload steps.
 */

// SMTP connection — the real support@diyrecordingequipment.com mailbox,
// exactly as configured in SiteGround's Email accounts. Authenticating as
// (and sending From) this real, existing mailbox is what keeps SPF/DKIM
// alignment intact and avoids the mail getting flagged as spam.
define('MAIL_SMTP_HOST', 'mail.diyrecordingequipment.com'); // SiteGround's mail server hostname for this domain — confirm in Site Tools > Email
define('MAIL_SMTP_PORT', 465);                               // 465 for implicit TLS ("smtps"), 587 for STARTTLS
define('MAIL_SMTP_ENCRYPTION', 'ssl');                       // 'ssl' for port 465, 'tls' for port 587
define('MAIL_SMTP_USERNAME', 'support@diyrecordingequipment.com');
define('MAIL_SMTP_PASSWORD', 'REPLACE_WITH_REAL_MAILBOX_PASSWORD');

// Where submitted requests get delivered. Usually the same mailbox above.
define('MAIL_TO_ADDRESS', 'support@diyrecordingequipment.com');
define('MAIL_TO_NAME', 'DIYRE Support');
