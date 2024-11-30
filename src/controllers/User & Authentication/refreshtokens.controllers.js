import UserModel from '../../models/user.models.js';
import { successApiResponse } from '../../utils/apiResponse.utils.js';
import cookieOption from '../../utils/cookieOption.utils.js';
import {
  generateAccessToken,
  generateRefreshToken,
} from '../../utils/jwt.utils.js';

const refreshtokens = async (req, res) => {
  try {
    const id = req.id;

    const refreshToken = generateRefreshToken({ id });

    const accessToken = generateAccessToken({ id });

    if (!refreshToken || !accessToken)
      return res
        .status(500)
        .json(new errorApiResponse(500, 'Internal Server Error', null));

    await UserModel.findByIdAndUpdate(
      id,
      {
        $set: {
          refreshToken,
        },
      },
      { new: true },
    );

    return res
      .status(200)
      .cookie('accesstoken', accessToken, cookieOption(15, null))
      .cookie('refreshtoken', refreshToken, cookieOption(null, 7))
      .json(new successApiResponse(200, 'Cookies Refreshes Successful', null));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export default refreshtokens;
