import UserModel from '../../models/user.models.js';
import {
  errorApiResponse,
  successApiResponse,
} from '../../utils/apiResponse.utils.js';

const findUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user)
      return res
        .status(404)
        .json(
          new errorApiResponse(404, 'User With This Email Not found!', null),
        );
    return res.status(200).json(
      new successApiResponse(200, 'User Found!', {
        firstName: user.firstName,
        lastName: user.lastName,
        id: user._id,
        email,
      }),
    );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export default findUser;
