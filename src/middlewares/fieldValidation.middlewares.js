import { emailRegx } from '../constants.js';
import { errorApiResponse } from '../utils/apiResponse.utils.js';


/* ====================================
-------Signup Field Validation--------
======================================*/
const signUpFieldValidation = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName)
    return res
      .status(400)
      .json(
        new errorApiResponse(400, 'First Name Required', null),
      );
  if (!lastName)
    return res
      .status(400)
      .json(
        new errorApiResponse(400, 'Last Name Required', null),
      );
  if (!email || !emailRegx.test(email))
    return res
      .status(400)
      .json(
        new errorApiResponse(400, 'Enter A Valid Email', null),
      );
  if (!password)
    return res
      .status(400)
      .json(
        new errorApiResponse(400, 'Password Required', null),
      );
  next();
};

/* ====================================
---------Login Field Validation--------
======================================*/

const loginFieldValidation = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !emailRegx.test(email))
    return res
      .status(400)
      .json(
        new errorApiResponse(400, 'Enter A Valid Email', null),
      );
  if (!password)
    return res
      .status(400)
      .json(
        new errorApiResponse(400, 'Password Required', null),
      );
  next();
};

export { signUpFieldValidation, loginFieldValidation };
