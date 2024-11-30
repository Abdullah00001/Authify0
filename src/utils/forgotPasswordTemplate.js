const ForgotPasswordEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Forgot Password OTP Verification</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f8f9fa;
      }
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      .header {
        background-color: #6c63ff;
        color: #ffffff;
        padding: 20px;
        text-align: center;
      }
      .content {
        padding: 20px;
        text-align: left;
      }
      .otp-box {
        font-size: 24px;
        font-weight: bold;
        color: #6c63ff;
        background-color: #f1f1f1;
        padding: 10px;
        text-align: center;
        border-radius: 5px;
        margin: 20px 0;
      }
      .footer {
        text-align: center;
        font-size: 12px;
        color: #666;
        padding: 10px;
        background-color: #f1f1f1;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Password Reset Request</h1>
      </div>
      <div class="content">
        <p>Dear {{firstName}} {{lastName}},</p>
        <p>We received a request to reset your password. To verify your identity, please use the OTP below:</p>
        <div class="otp-box">{{otp}}</div>
        <p>
          This OTP is valid for the next 10 minutes. If you did not request this, please ignore this email.
        </p>
        <p>Best Regards,<br />The Postbook Team</p>
      </div>
      <div class="footer">
        <p>
          Contact Us: If you have any questions, feel free to reach out to our
          support team at
          <a href="mailto:support@postbook.com">support@postbook.com</a>.
        </p>
        <p>
          Note: This email was sent to {{email}}. If you would like to
          unsubscribe, please click <a href="#">here</a>.
        </p>
      </div>
    </div>
  </body>
</html>
`;

export default ForgotPasswordEmailTemplate;
