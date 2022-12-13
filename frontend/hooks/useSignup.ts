import * as yup from "yup";
import { ChangeEvent, useState } from "react";
import { signupErrors, signupInfo } from "../types";
import axiosWithAuth from "../utils/axiosWithAuth";

const useSignup = (): [
  signupInfo,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: ChangeEvent<HTMLFormElement>) => Promise<void>,
  signupErrors
] => {
  const [signupInfo, setSignupInfo] = useState<signupInfo>({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<signupErrors>({
    username: "",
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const signupValidation = yup.object().shape({
    name: yup.string().trim().required("Must provide valid name"),
    username: yup.string().trim().required("Please Provide valid username"),
    email: yup.string().email("Please Provide valid email"),
    password: yup.string().required("Please Provide valid password"),
    confirmPassword: yup
      .string()
      .required("Please enter your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const validateChange = (e: ChangeEvent<HTMLInputElement>) => {
    yup
      .reach(signupValidation, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
      })
      .catch((error: yup.ValidationError) => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [e.target.name]: error.errors[0],
        }));
      });
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignupInfo((prevSignupInfo) => ({
      ...prevSignupInfo,
      [name]: value,
    }));
    validateChange(e);
  };

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (signupInfo.password === signupInfo.confirmPassword) {
        await axiosWithAuth().post("/users", signupInfo);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return [signupInfo, onChange, onSubmit, errors];
};

export default useSignup;
