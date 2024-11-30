import UserModel from '../../models/user.models.js';
import {
  successApiResponse,
  errorApiResponse,
} from '../../utils/apiResponse.utils.js';

const changePassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const id = req.decoded.id;
    await UserModel.findByIdAndUpdate(id, { $set: { password: newPassword } });
    return res
      .status(200)
      .json(new successApiResponse(200, 'Password Changed Successfully', null));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export default changePassword;
