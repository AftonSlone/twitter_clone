import { ChangeEvent, useState } from "react";
import { signupInfo } from "../types";

const useSignup = (): [
  signupInfo,
  (e: ChangeEvent<HTMLInputElement>) => void
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

  return [signupInfo, onChange];
};

export default useSignup;
