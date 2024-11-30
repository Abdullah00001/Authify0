import UserModel from '../../models/user.models.js';
import {
  errorApiResponse,
  successApiResponse,
} from '../../utils/apiResponse.utils.js';
import cookieOption from '../../utils/cookieOption.utils.js';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../../utils/jwt.utils.js';

const verifyEmail = async (req, res) => {
  try {
    const { requestedOtp, email } = req.body;
    const user = await UserModel.findOne({ email });
    const isExpire = new Date() > new Date(user.otpExpiry);
    if (isExpire) {
      await UserModel.findByIdAndUpdate(
        user._id,
        {
          $set: {
            otp: null,
            otpExpiry: null,
          },
        },
        { new: true },
      );
      return res
        .status(400)
        .json(new errorApiResponse(400, 'OTP Has Bin Expired', null));
    }
    if (requestedOtp !== user.otp)
      return res
        .status(400)
        .json(new errorApiResponse(400, 'Invalid OTP', null));
    const accessToken = generateAccessToken({ id: user._id });
    const refreshToken = generateRefreshToken({ id: user._id });
    await UserModel.findByIdAndUpdate(
      user._id,
      {
        $set: {
          isVerified: true,
          otp: null,
          otpExpiry: null,
          refreshToken,
        },
      },
      { new: true },
    );

    return res
      .status(200)
      .cookie('accesstoken', accessToken, cookieOption(15, null))
      .cookie('refreshtoken', refreshToken, cookieOption(null, 7))
      .json(
        new successApiResponse(200, 'Email Verification Is Successfull', null),
      );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export default verifyEmail;
