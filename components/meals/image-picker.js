"use client";

import { useRef, useState } from "react";
import cs from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState();

  function handleClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);

  }
  return (
    <>
      <div className={cs.picker}>
        <label htmlFor="image">{label}</label>
        <div className={cs.controls}>
          <div className={cs.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && (
              <Image
                src={pickedImage}
                alt="The image selected by the user"
                fill
              ></Image>
            )}
          </div>
          <input
            className={cs.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            required
          />
          <button className={cs.button} type="button" onClick={handleClick}>
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
}
