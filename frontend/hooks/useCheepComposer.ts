import { ChangeEvent, useState } from "react";
import { newCheep } from "../types";
import axiosWithAuth from "../utils/axiosWithAuth";

const useCheepComposer = (): [
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => Promise<void>,
  newCheep
] => {
  const [newCheep, setNewCheep] = useState<newCheep>({
    content: "",
    image: null,
  });
  const [ajaxError, setAjaxErrors] = useState("");

  const postNewCheep = async () => {
    try {
      await axiosWithAuth().post<newCheep>("/cheeps", newCheep);
    } catch (e: any) {
      setAjaxErrors(e.responce.data.message);
    }
  };

  const addPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      console.log(newCheep.image);
      console.log(fileList[0]);
      setNewCheep((prevState) => ({ ...prevState, image: fileList[0] }));
      // e.target.value = fileList[0].name;
    }
  };

  const addContent = (e: ChangeEvent<HTMLInputElement>) => {
    setNewCheep((prevNewCheep) => ({
      ...prevNewCheep,
      content: e.target.value,
    }));
  };
  return [addPhoto, addContent, postNewCheep, newCheep];
};

export default useCheepComposer;
