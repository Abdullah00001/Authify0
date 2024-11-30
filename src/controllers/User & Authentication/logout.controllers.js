import UserModel from '../../models/user.models.js';
import cookieOption from '../../utils/cookieOption.utils.js';
import {
  successApiResponse,
  errorApiResponse,
} from '../../utils/apiResponse.utils.js';

const logoutController = async (req, res) => {
  try {
    const id = req.decoded.id;
    await UserModel.findByIdAndUpdate(id, { $set: { refreshToken: null } });
    return res
      .status(200)
      .clearCookie('accesstoken', cookieOption(null, null))
      .clearCookie('refreshtoken', cookieOption(null, null))
      .json(new successApiResponse(200, 'User Logedout Successfully', null));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export default logoutController;
