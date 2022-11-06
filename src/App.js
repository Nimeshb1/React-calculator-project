import { useState } from "react";
import "./App.css";
import { ButtonsAreas } from "./components/ButtonsAreas";

import { Display } from "./components/Display";

const operators = ["%", "/", "-", "+", "*"];
function App() {
  let [str, strdisplay] = useState("");
  const [setlastope, stroper] = useState("");

  const handelOnClick = (val) => {
    strdisplay(str + val);

    if (val === "AC") {
      strdisplay("");
      return;
    }

    if (val === "C") {
      const lastdel = str[str.length - 1];
      strdisplay(lastdel);
      return;
    }

    if (val === "=") {
      let lastcar = str[str.length - 1];
      let dislay = str;

      if (operators.includes(lastcar)) {
        dislay = str.slice(0, -1);
      }

      strdisplay(eval(dislay).toString());
      return;
    }

    if (operators.includes(val)) {
      stroper(val);
      if (!str) {
        return;
      }
      const lastChar = str[str.length - 1];
      console.log(lastChar);
      let temStr = str;
      if (operators.includes(lastChar)) {
        temStr = str.slice(0, -1);
      }
      strdisplay(temStr + val);
      return;
    }
  };
  return (
    <div className="wrapper">
      <div className="botton">
        <h1>Mero BBY Rojina Bista</h1>
        <ButtonsAreas handelOnClick={handelOnClick} />
        <Display str={str} />
      </div>
    </div>
  );
}
export default App;
