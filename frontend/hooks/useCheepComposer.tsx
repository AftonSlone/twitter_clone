import { ChangeEvent, useState } from "react";

const useCheepComposer = (): [(e: ChangeEvent<HTMLInputElement>) => void] => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File>();
  const [errors, setErrors] = useState(null);

  const addPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList) {
      setImage(fileList[0]);
      e.target.value = "";
    }
  };
  return [addPhoto];
};

export default useCheepComposer;
