import { ChangeEvent, useState } from "react";
import { loginCredentials } from "../types";
import axiosWithAuth from "../utils/axiosWithAuth";

const useLogin = (): [
  loginCredentials,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: ChangeEvent<HTMLFormElement>) => Promise<void>
] => {
  const [loginCredentials, setLoginCredentials] = useState<loginCredentials>({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginCredentials((prevLoginCredentials) => ({
      ...prevLoginCredentials,
      [name]: value,
    }));
  };

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axiosWithAuth().post<loginCredentials>(
      "/login",
      loginCredentials
    );
    console.log(res);
  };

  return [loginCredentials, onChange, onSubmit];
};

export default useLogin;
