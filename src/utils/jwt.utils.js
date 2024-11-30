import jwt from 'jsonwebtoken';

const generateAccessToken = playload => {
  try {
    const token = jwt.sign(playload, process.env.ACCESSTOKEN_SECRET_KEY, {
      expiresIn: '30min',
    });
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const generateRefreshToken = playload => {
  try {
    const token = jwt.sign(playload, process.env.REFRESHTOKEN_SECRET_KEY, {
      expiresIn: '7d',
    });
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};



const verifyAccessToken = token => {
  try {
    const decoded = jwt.verify(token, process.env.ACCESSTOKEN_SECRET_KEY);
    return decoded;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const verifyRefreshToken = token => {
  try {
    const decoded = jwt.verify(token, process.env.REFRESHTOKEN_SECRET_KEY);
    return decoded;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
