import React from "react";
import { useStyles } from "./Image.styles";
import cosmos from "../../assets/defaultImage/cosmos.png";

export const Image = ({ imgUrl, imgTitle }) => {
  const { imageContainer, picture, pictureTitle } = useStyles();

  const url = !imgUrl ? cosmos : imgUrl;
  return (
    <div className={imageContainer}>
      <p className={pictureTitle}>{imgTitle}</p>
      <img src={url} alt={imgTitle} className={picture} />
    </div>
  );
};
