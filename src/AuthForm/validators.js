export const validatePassword = (password) => {
  if (password.length === 0) {
    return 'Please enter your password';
  }

  return false;
};

export const validateEmail = (email) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (email.length === 0) {
    return 'Please enter your email';
  }

  if (!emailRegex.test(email)) {
    return 'Please enter a valid email';
  }

  return false;
};
