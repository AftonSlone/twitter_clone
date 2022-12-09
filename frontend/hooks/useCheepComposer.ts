import { ChangeEvent, useState } from "react";
import { newCheep } from "../types";

const useCheepComposer = (): [
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: ChangeEvent<HTMLInputElement>) => void
] => {
  const [image, setImage] = useState<File>();

  const [newCheep, setNewCheep] = useState<newCheep>({
    content: "",
    image: null,
  });

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
  return [addPhoto, addContent];
};

export default useCheepComposer;
