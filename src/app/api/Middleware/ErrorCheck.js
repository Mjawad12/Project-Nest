const ErrorCheck = (errors) => {
  const arr = ["name", "password", "id", "email", "admin"];
  const errorObj = [];
  errors.forEach((it) => {
    const e1 = {};
    e1.key = it.key;
    for (let i = 0; i < arr.length; i++) {
      if (it.key === arr[i]) {
        e1.message = `Enter a vaild ${arr[i]}`;
      }
    }
    errorObj.push(e1);
  });
  return errorObj;
};

export default ErrorCheck;
