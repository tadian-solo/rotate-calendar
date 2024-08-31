import * as React from "react";
import Typography from "@mui/material/Typography";
import Counter from "../components/Counter";
import BasicDateCalendar from "../components/Calendar";
import Shufic from "../components/Shufic";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../styles/styles.scss";

const IndexPage = () => {
  const [isRotate, setIsRotate] = React.useState(false);

  const handleIsRotateChange = () => {
    setIsRotate(!isRotate);
  };

  return (
    <main>
      <div className="wrapper">
        <Typography variant="h3" component="h1" align="center" sx={{ mb: 2 }}>
          А скоро третье сентября?
        </Typography>
        <Counter />
        <BasicDateCalendar isRotate={isRotate} />
        <Shufic onChangeIsRotate={handleIsRotateChange} />
      </div>
    </main>
  );
};

export default IndexPage;
