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

  const postNewCheep = async () => {
    await axiosWithAuth().post<newCheep>("/cheeps", newCheep);
  };

  const addPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      setNewCheep((prevNewCheep) => ({ ...prevNewCheep, image: fileList[0] }));
      e.target.value = "";
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
