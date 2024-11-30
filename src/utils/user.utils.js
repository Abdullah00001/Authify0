import bcrypt from 'bcrypt';
import { saltRounds } from '../constants.js';
const cleanUserData = user => {
  const { password, refreshToken,otp,otpExpiry,isVerified, ...cleanedData } = user.toObject();
  return cleanedData;
};

const hashPassword = async plainPassword => {
  const hashPass = await bcrypt.hash(plainPassword, saltRounds);
  return hashPass;
};

const comparePassword = async (plainPassword, encryptedPassword) => {
  try {
    const result = await bcrypt.compare(plainPassword, encryptedPassword);
    return result;
  } catch (error) {
    return null;
  }
};

const compareRefreshToken = (token, dbToken) => {
  if (token !== dbToken) return false;
  return true;
};

export { cleanUserData, hashPassword, comparePassword, compareRefreshToken };
