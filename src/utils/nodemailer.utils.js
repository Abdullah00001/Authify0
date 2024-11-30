import transporter from '../configs/nodemailer.configs.js';
import verificationEmailTemplate from './emailVerificationTemplate.js';
import otpGenerator from 'otp-generator';
import UserModel from '../models/user.models.js';
import ForgotPasswordEmailTemplate from './forgotPasswordTemplate.js';

const sendVarificationEmail = async userData => {
  try {
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
    });
    const expiryDate = new Date(Date.now() + 15 * 60000).toISOString();

    await UserModel.findByIdAndUpdate(
      userData.id,
      {
        $set: {
          otp: otp,
          otpExpiry: expiryDate,
        },
      },
      { new: true },
    );
    const template = Handlebars.compile(verificationEmailTemplate);
    const personalizedHtml = template({
      otp: otp,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
    });
    const mailOption = {
      from: process.env.HOST_EMAIL,
      to: userData.email,
      subject: 'Verify Your Email',
      html: personalizedHtml,
    };
    await transporter.sendMail(mailOption);
  } catch (error) {
    console.error(error);
  }
};
const sendForgotPasswordEmail = async userData => {
  try {
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
    });
    const expiryDate = new Date(Date.now() + 15 * 60000).toISOString();

    await UserModel.findByIdAndUpdate(
      userData.id,
      {
        $set: {
          otp: otp,
          otpExpiry: expiryDate,
        },
      },
      { new: true },
    );
    const template = Handlebars.compile(ForgotPasswordEmailTemplate);
    const personalizedHtml = template({
      otp: otp,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
    });
    const mailOption = {
      from: process.env.HOST_EMAIL,
      to: userData.email,
      subject: 'Forgot Password OTP',
      html: personalizedHtml,
    };
    await transporter.sendMail(mailOption);
  } catch (error) {
    console.error(error);
  }
};

export default sendVarificationEmail;
export { sendForgotPasswordEmail };
