import React from "react";
import { useStyles } from "./Image.styles";

export const Image = ({ imgUrl, imgTitle }) => {
  const { imageContainer, picture, pictureTitle } = useStyles();
  return (
    <div className={imageContainer}>
      <p className={pictureTitle}>{imgTitle}</p>
      <img src={imgUrl} alt={imgTitle} className={picture} />
    </div>
  );
};
