import UserModel from '../../models/user.models.js';
import {
  successApiResponse,
  errorApiResponse,
} from '../../utils/apiResponse.utils.js';

const profileController = async (req, res) => {
  try {
    const id = req.decoded.id;
    const user = await UserModel.findById(
      id,
      '-password -refreshToken -otp -otpExpiry -isVerified -__v',
    );
    console.log();
    return res
      .status(200)
      .json(
        new successApiResponse(200, 'Retrive User Profile Successful', user),
      );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export default profileController;
