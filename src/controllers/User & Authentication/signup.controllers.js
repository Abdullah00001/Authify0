import UserModel from '../../models/user.models.js';
import {
  errorApiResponse,
  successApiResponse,
} from '../../utils/apiResponse.utils.js';
import sendVarificationEmail from '../../utils/nodemailer.utils.js';

import { hashPassword, cleanUserData } from '../../utils/user.utils.js';

const signupController = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashPass = await hashPassword(password);
    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password: hashPass,
    });
    await newUser.save();
    await sendVarificationEmail({
      firstName,
      lastName,
      email,
      id: newUser._id,
    });
    return res
      .status(201)
      .json(
        new successApiResponse(
          201,
          'User Created Successfully',
          cleanUserData(newUser),
        ),
      );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export default signupController;
