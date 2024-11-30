import { Router } from 'express';

const router = Router();

/* =================================
--------------MIDDLEWARES-----------
====================================*/

import {
  loginFieldValidation,
  signUpFieldValidation,
} from '../middlewares/fieldValidation.middlewares.js';
import {
  checkPassword,
  checkRefreshToken,
  isAuthenticated,
  isLoginUserExist,
  isSignupUserExist,
  isVerifiedUser,
} from '../middlewares/user.middlewares.js';

/* =================================
--------------CONTROLLERS-----------
====================================*/
import signupController from '../controllers/User & Authentication/signup.controllers.js';
import loginController from '../controllers/User & Authentication/login.controllers.js';
import authenticated from '../controllers/User & Authentication/authenticated.controllers.js';
import refreshtokens from '../controllers/User & Authentication/refreshtokens.controllers.js';
import changePassword from '../controllers/User & Authentication/changepassword.controllers.js';
import deleteAccount from '../controllers/User & Authentication/deleteaccount.controllers.js';
import logoutController from '../controllers/User & Authentication/logout.controllers.js';
import profileController from '../controllers/User & Authentication/profile.controllers.js';
import verifyEmail from '../controllers/User & Authentication/verifyEmail.controllers.js';
import resendVerificationEmailController from '../controllers/User & Authentication/resendVerificationEmail.controllers.js';
import findUser from '../controllers/User & Authentication/findUser.controllers.js';
import sentForgotPasswordOTP from '../controllers/User & Authentication/sentForgotPasswordOTP.controllers.js';
import verifyOTP from '../controllers/User & Authentication/verifyForgotPasswordOTP.controllers.js';
import recoverPassword from '../controllers/User & Authentication/recoverfogottenPassword.controllers.js';

router
  .route('/signup')
  .post(signUpFieldValidation, isSignupUserExist, signupController);

router
  .route('/login')
  .post(
    loginFieldValidation,
    isLoginUserExist,
    isVerifiedUser,
    checkPassword,
    loginController,
  );

router.route('/verify').post(verifyEmail);
router
  .route('/resend-verification-email')
  .post(resendVerificationEmailController);
router
  .route('/forgot-password/find-user')
  .post(isLoginUserExist, isVerifiedUser, findUser);
router
  .route('/forgot-password/sent-otp')
  .post(isLoginUserExist, isVerifiedUser, sentForgotPasswordOTP);
router
  .route('/forgot-password/verify-otp')
  .post(isLoginUserExist, isVerifiedUser, verifyOTP);
router
  .route('/forgot-password/recover-password')
  .post(isLoginUserExist, isVerifiedUser, recoverPassword);

/* ================================
----------PROTECTED ROUTES---------
=================================== */
router.route('/isauthenticated').get(isAuthenticated, authenticated);
router.route('/refreshtokens').post(checkRefreshToken, refreshtokens);
router.route('/profile').get(isAuthenticated, profileController);
router.route('/change-password').patch(isAuthenticated, changePassword);
export default router;
router.route('/delete-account').delete(isAuthenticated, deleteAccount);
router.route('/logout').patch(isAuthenticated, logoutController);
