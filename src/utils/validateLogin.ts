type Errors = {
  username?: string;
  password?: string;
};

export function validateLogin(username: string, password: string): Errors {
  const errors: Errors = {};

  if (!username.trim()) {
    errors.username = 'This field is required';
  } else if (username.trim().length < 3) {
    errors.username = 'Minimum 3 characters';
  }

  if (!password.trim()) {
    errors.password = 'This field is required';
  } else if (password.trim().length < 3) {
    errors.password = 'Minimum 3 characters';
  }

  return errors;
}
