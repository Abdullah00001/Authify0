import UserModel from '../../models/user.models.js';
import {
  successApiResponse,
  errorApiResponse,
} from '../../utils/apiResponse.utils.js';
import { hashPassword } from '../../utils/user.utils.js';

const recoverPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashUserPassword =await hashPassword(password);
    await UserModel.findOneAndUpdate(
      { email },
      { $set: { password: hashUserPassword } },
      { new: true },
    );
    return res
      .status(200)
      .json(new successApiResponse(200, 'Password Recover Successfull', null));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export default recoverPassword;
