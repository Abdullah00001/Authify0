import UserModel from '../../models/user.models.js';
import {
  errorApiResponse,
  successApiResponse,
} from '../../utils/apiResponse.utils.js';
import { sendForgotPasswordEmail } from '../../utils/nodemailer.utils.js';

const sentForgotPasswordOTP = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    await sendForgotPasswordEmail({
      firstName: user.firstName,
      lastName: user.lastName,
      email,
      id: user._id,
    });
    return res
      .status(200)
      .json(new successApiResponse(200, 'Email Sent With The OTP', null));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export default sentForgotPasswordOTP;
