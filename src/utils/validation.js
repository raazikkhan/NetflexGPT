const CheckValidation = (email, Password, name) => {
  const isNameValid = /^[a-zA-Z\s]+$/.test(name);

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);

  //condition for email and password
  if (!isEmailValid) return "Email Id is Invalid";
  if (!isPasswordValid) return "InValid Password";
  if (!isNameValid && name) return "Name is Invalid";

  return null;
};

export default CheckValidation;
