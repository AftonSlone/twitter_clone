import * as yup from "yup";
import { ChangeEvent, useEffect, useState } from "react";
import { newCheep } from "../types";
import axiosWithAuth from "../utils/axiosWithAuth";

const useCheepComposer = (): [
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => Promise<void>,
  newCheep,
  string,
  boolean
] => {
  const [cheep, setCheep] = useState<newCheep>({
    content: "",
    image: null,
  });

  const [ajaxError, setAjaxErrors] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [contentErrors, setContentErrors] = useState("");

  const postNewCheep = async () => {
    try {
      await axiosWithAuth().post<newCheep>("/cheeps", cheep);
    } catch (e: any) {
      setAjaxErrors(e.responce.data.message);
    }
  };

  const addPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      setCheep((prevState) => ({ ...prevState, image: fileList[0] }));
      // e.target.value = fileList[0].name;
    }
  };

  const addContent = (e: ChangeEvent<HTMLInputElement>) => {
    setCheep((prevState) => ({
      ...prevState,
      content: e.target.value,
    }));
    validateChange(e);
  };

  const contentValidation = yup.object().shape({
    content: yup.string().max(240, "Cheeps must be 240 characters or less"),
  });

  useEffect(() => {
    contentValidation.isValid(cheep).then((valid) => {
      setDisabled(!valid);
    });
  }, [contentValidation, cheep]);

  const validateChange = (e: ChangeEvent<HTMLInputElement>) => {
    yup
      .reach(contentValidation, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setContentErrors(e.target.value);
      })
      .catch((error: yup.ValidationError) => {
        setContentErrors(error.errors[0]);
      });
  };

  return [addPhoto, addContent, postNewCheep, cheep, contentErrors, disabled];
};

export default useCheepComposer;
