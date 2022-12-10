import { ChangeEvent, useState } from "react";
import { loginCredentials } from "../types";

const useLogin = (): [loginCredentials, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({
    email: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginCredentials((prevLoginCredentials) => ({
      ...prevLoginCredentials,
      [name]: value,
    }));
  };

  return [loginCredentials, onChange];
};

export default useLogin;
