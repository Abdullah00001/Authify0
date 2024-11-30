import UserModel from '../../models/user.models.js';
import {
  successApiResponse,
  errorApiResponse,
} from '../../utils/apiResponse.utils.js';
import cookieOption from '../../utils/cookieOption.utils.js';
import { cleanUserData } from '../../utils/user.utils.js';

const deleteAccount = async (req, res) => {
  try {
    const id = req.decoded.id;
    const deletedDocs = await UserModel.findByIdAndDelete(id);
    return res
      .status(200)
      .clearCookie('accesstoken', cookieOption(null, null))
      .clearCookie('refreshtoken', cookieOption(null, null))
      .json(
        new successApiResponse(
          200,
          'Account Delete Successful',
          cleanUserData(deletedDocs),
        ),
      );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};
export default deleteAccount;
