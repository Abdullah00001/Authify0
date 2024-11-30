import {
  successApiResponse,
  errorApiResponse,
} from '../../utils/apiResponse.utils.js';

const authenticated = (req, res) => {
  try {
    const decoded = req.decoded;
    if (decoded)
      return res
        .status(200)
        .json(new successApiResponse(200, 'User Is Authenticated', decoded));
    return res
      .status(401)
      .json(new errorApiResponse(401, 'Invalid Accesstoken', null));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new errorApiResponse(500, 'Internal Server Error', null));
  }
};

export default authenticated;
