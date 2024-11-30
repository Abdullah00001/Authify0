import UserModel from '../../models/user.models.js';
import {
  errorApiResponse,
  successApiResponse,
} from '../../utils/apiResponse.utils.js';
import sendVarificationEmail from '../../utils/nodemailer.utils.js';

const resendVerificationEmailController = async (req, res) => {
  try {
    const { userEmail } = req.body;
    const user = await UserModel.findOne({ email: userEmail });
    await sendVarificationEmail({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      id: user._id,
    });
    return res
      .status(200)
      .json(
        new successApiResponse(
          200,
          'Resend Varification Email Successful',
          null,
        ),
      );
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export default resendVerificationEmailController;
