import * as React from "react";
import shufic from "../images/shufic.png";
import "../styles/shufic.scss";

export default function Shufic({onChangeIsRotate}) {
  return (
    <div className="shufic_wrapper" onClick={() => onChangeIsRotate()}>
      <div className="shufic_text">
        <span>Календарь перевернуть?</span>
      </div>
      <img className="shufic_img" src={shufic} alt="Шуфутинский" />
    </div>
  );
}
