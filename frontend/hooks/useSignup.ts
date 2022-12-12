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
    name: "",
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
      await axiosWithAuth().post("/users", signupInfo);
    }
  };

  return [signupInfo, onChange, onSubmit];
};

export default useSignup;
