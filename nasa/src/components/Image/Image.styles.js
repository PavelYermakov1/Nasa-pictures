import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  imageContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  pictureTitle: {
    fontSize: "20px",
  },
  picture: {
    width: "70%",
    height: "70%",
  },
});
