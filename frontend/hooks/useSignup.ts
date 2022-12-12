import axios, { isAxiosError } from "axios";
import { ChangeEvent, useState } from "react";
import { signupInfo } from "../types";
import axiosWithAuth from "../utils/axiosWithAuth";

const useSignup = (): [
  signupInfo,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: ChangeEvent<HTMLFormElement>) => Promise<void>
] => {
  const [signupInfo, setSignupInfo] = useState<signupInfo>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignupInfo((prevSignupInfo) => ({
      ...prevSignupInfo,
      [name]: value,
    }));
  };

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signupInfo.password === signupInfo.confirmPassword) {
      await axios.post("http://localhost:3000/users", signupInfo);
    }
  };

  return [signupInfo, onChange, onSubmit];
};

export default useSignup;
