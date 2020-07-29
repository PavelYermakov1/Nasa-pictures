import React, { useState, useEffect } from "react";
import { CalendarContainer } from "./Calendar/Calendar";
import { useStyles } from "./App.styles";
import { getPicture } from "./../services/NasaService";
import { Image } from "./Image/Image";

function App() {
  const [imgUrl, setImgUrl] = useState();
  const [imgTitle, setImgTitle] = useState(null);

  const { wrapper } = useStyles();

  useEffect(() => {
    dateFormation(getDate());
  }, []);

  const getDate = () => {
    return !localStorage.getItem("date")
      ? new Date()
      : new Date(localStorage.getItem("date"));
  };

  const onChange = (value) => {
    localStorage.setItem("date", value);
    dateFormation(value);
  };

  const dateFormation = async (value) => {
    const day = value.getDate();
    const month = value.getMonth() + 1;
    const year = value.getFullYear();

    const date = `${year}-${month}-${day}`;
    const response = await getPicture(date);
    setImgUrl(response.hdurl);
    setImgTitle(response.title);
  };

  return (
    <div className={wrapper}>
      <CalendarContainer onChange={onChange} value={getDate()} />
      <Image imgUrl={imgUrl} imgTitle={imgTitle} />
    </div>
  );
}

export default App;
