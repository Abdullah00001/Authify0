import UserModel from '../../models/user.models.js';
import {
  errorApiResponse,
  successApiResponse,
} from '../../utils/apiResponse.utils.js';

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await UserModel.findOne({ email });
    const isExpire = new Date() > new Date(user.otpExpiry);
    if (isExpire) {
      await UserModel.findByIdAndUpdate(user._id, {
        $set: { otp: null, otpExpiry: null },
      });
      return res
        .status(400)
        .json(new errorApiResponse(400, 'OTP Has Bin Expired!', null));
    }

    if (otp !== user.otp)
      return res
        .status(400)
        .json(new errorApiResponse(400, 'Invalid OTP!', null));
    await UserModel.findByIdAndUpdate(user._id, {
      $set: { otp: null, otpExpiry: null },
    });
    return res
      .status(200)
      .json(new successApiResponse(200, 'Verification Successfull!', null));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};
export default verifyOTP;
