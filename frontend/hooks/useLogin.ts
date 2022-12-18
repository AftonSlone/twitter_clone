import * as yup from "yup";
import { ChangeEvent, useEffect, useState } from "react";
import { loginCredentials, loginErrors } from "../types";
import axiosWithAuth from "../utils/axiosWithAuth";

const useLogin = (): [
  loginCredentials,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: ChangeEvent<HTMLFormElement>) => Promise<void>,
  string,
  loginErrors,
  boolean
] => {
  const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({
    email: "",
    password: "",
  });

  const [ajaxError, setAjaxErrorr] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loginErrors, setLoginErrors] = useState<loginErrors>({
    email: "",
    password: "",
  });

  const signupValidation = yup.object().shape({
    email: yup.string().email().required("Please Provide valid email"),
    password: yup.string().required("Please Provide valid password"),
  });

  useEffect(() => {
    signupValidation.isValid(loginCredentials).then((valid) => {
      setDisabled(!valid);
    });
  }, [signupValidation, loginCredentials]);

  const validateChange = (e: ChangeEvent<HTMLInputElement>) => {
    yup
      .reach(signupValidation, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setLoginErrors((prevErrors) => ({
          ...prevErrors,
          [e.target.name]: "",
        }));
      })
      .catch((error: yup.ValidationError) => {
        setLoginErrors((prevErrors) => ({
          ...prevErrors,
          [e.target.name]: error.errors[0],
        }));
      });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginCredentials((prevLoginCredentials) => ({
      ...prevLoginCredentials,
      [name]: value,
    }));
    validateChange(e);
  };

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axiosWithAuth().post<loginCredentials>(
        "/login",
        loginCredentials
      );
    } catch (e: any) {
      setAjaxErrorr(e.response.data.message);
    }
  };

  return [loginCredentials, onChange, onSubmit, ajaxError, loginErrors, disabled];
};

export default useLogin;
