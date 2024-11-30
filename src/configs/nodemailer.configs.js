import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.HOST_EMAIL,
    pass: process.env.HOST_PASS,
  },
});

export default transporter;
