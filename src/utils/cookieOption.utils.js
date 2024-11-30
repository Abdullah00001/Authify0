const cookieOption = (min, day) => {
  const option = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production' ? true : false,
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
    path: '/',
    domain: process.env.NODE_ENV === 'production' ? '.vercel.app' : 'localhost',
  };
  if (min) {
    option.maxAge = min * 60 * 1000;
  }
  if (day) {
    option.maxAge = day * 24 * 60 * 60 * 1000;
  }
  return option;
};

export default cookieOption;
