import { getQueriesForElement } from "@testing-library/react";
import React, { useRef } from "react";
import styles from "./styles.module.css";
const GroupData = () => {
  let imgFile = useRef();
  let logoRef = useRef();

  const getFile = () => {
    imgFile.current.click();
  };

  const onImageLoad = (e) => {
    logoRef.current.src = window.URL.createObjectURL(e.target.files[0]);
  };
  return (
    <div className={styles.data}>
      <div className={styles.groupLogo}>
        <img
          ref={logoRef}
          src={
            "https://s3-ap-southeast-1.amazonaws.com/he-public-data/user14b9a23c.png"
          }
        />
        <button className={styles.camButton} onClick={getFile}>
          <i className="fas fa-camera"></i>
        </button>
        <input
          ref={imgFile}
          onChange={(e) => onImageLoad(e)}
          type="file"
          name="myImage"
          accept="image/*"
        />
      </div>
      <form>
        <input placeholder="Enter group name" type="text" />
        <input placeholder="Enter group description" type="text" />
      </form>
    </div>
  );
};

export default GroupData;
