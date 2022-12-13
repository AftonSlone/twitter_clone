import { ChangeEvent, useState } from "react";
import { loginCredentials } from "../types";
import axiosWithAuth from "../utils/axiosWithAuth";

const useLogin = (): [
  loginCredentials,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => Promise<void>
] => {
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

  const login = async () => {
    await axiosWithAuth().post<loginCredentials>("/login", loginCredentials);
  };

  return [loginCredentials, onChange, login];
};

export default useLogin;
