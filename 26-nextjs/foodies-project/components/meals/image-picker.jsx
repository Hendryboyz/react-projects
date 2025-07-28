'use client'

import {useRef, useState} from "react";
import Image from "next/image";
import styles from './image-picker.module.css';

export default function ImagePicker({label, name}) {
  const [pickedImage, setPickedImage] = useState(null);
  const imagePicker = useRef();

  function handleClick() {
    imagePicker.current?.click();
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
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill />}
        </div>
        <input
          ref={imagePicker}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}