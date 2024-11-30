# **Authify0**  

A secure and scalable authentication backend built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**. Authify0 provides robust user authentication and account management with features like signup, OTP-based email verification, login, profile management, and password recovery.

---

## 🔑 **Features**  

- **Signup:**  
  Users can register a new account.  

- **OTP-Based Email Verification:**  
  Verifies users via OTP sent to their email.  

- **Resend Verification:**  
  Allows users to request a new OTP.  

- **Authentication & Authorization:**  
  - Automatic authentication upon verification.  
  - JWT-based secure session management.  

- **Login & Logout:**  
  - Users can log in with verified accounts.  
  - Secure logout to end the session.  

- **Profile Management:**  
  Users can view and update profile information.  

- **Account Deletion:**  
  Users can delete their account permanently.  

- **Password Recovery:**  
  - Request OTP to reset a forgotten password.  
  - Reset password after OTP verification.  

---

## 🛠 **Tech Stack**  

- **Backend:**  
  - Node.js  
  - Express.js  

- **Database:**  
  - MongoDB  
  - Mongoose  

- **Security & Authentication:**  
  - JWT (JSON Web Tokens)  
  - Bcrypt (Password Hashing)  

- **Email Services:**  
  - Nodemailer (for OTP and notifications)  

---

## 📦 **Installation**  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/your-username/authify0.git
   cd authify0
## 2 Install Dependencies

```bash
npm install
```
### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

```dotenv
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name  
CLOUDINARY_API_KEY=your-cloudinary-api-key  
CLOUDINARY_API_SECRET=your-cloudinary-api-secret  

ACCESSTOKEN_SECRET_KEY=your-access-token-secret-key  
REFRESHTOKEN_SECRET_KEY=your-refresh-token-secret-key  

HOST_EMAIL=your-host-email  
HOST_PASS=your-host-email-password  

NODEMAILER_SECRET_KEY=your-nodemailer-secret-key  

MONGODB_URI_DEV=your-mongodb-uri  
DEVELOPMENT_DOMAIN=your-development-domain  
DEVELOPMENT_URL=your-development-url  
```
### 4. Run the Application

To start the application, run the following command:

```bash
npm start
```
### 5. 🧪 API Endpoints

| Method | Endpoint              | Description                        | Auth Required |
|--------|-----------------------|------------------------------------|---------------|
| POST   | `/api/signup`          | Register a new user               | No            |
| POST   | `/api/verify`          | Verify account with OTP           | No            |
| POST   | `/api/resend-otp`      | Resend OTP                        | No            |
| POST   | `/api/login`           | Log in a user                     | No            |
| POST   | `/api/logout`          | Log out the user                  | Yes           |
| GET    | `/api/profile`         | Get user profile                  | Yes           |
| DELETE | `/api/delete-account`  | Delete user account               | Yes           |
| POST   | `/api/forgot-password` | Request password recovery OTP     | No            |
| POST   | `/api/reset-password`  | Reset password with OTP           | No            |

### 6. 🔐 Security

- Passwords are securely hashed using bcrypt.
- JWT is used for authentication and session management.
- OTPs are securely generated and sent via Nodemailer.
### 7. 🚀 Future Enhancements

- Implement Multi-Factor Authentication (MFA).
- Add social login options (Google, Facebook).
- Introduce rate limiting for enhanced security.

---

### 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute or open issues if you find any bugs or have suggestions for improvements!

