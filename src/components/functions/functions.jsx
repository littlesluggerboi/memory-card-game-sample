import classes from "./functions.module.css";
import helpImg from "../../assets/images/help-circle.svg";
import settingImg from "../../assets/images/cog.svg";
import { useState } from "react";
export default function Functions({callback}) {
  const [help, setHelp] = useState(false);

  function clickHelp() {
    setHelp(!help);
  }

  return (
    <>
      <div className={classes.functions}>
        <button onClick={clickHelp}>
          <img src={helpImg} alt="Help function logo" />
        </button>
        <button onClick={callback}>
          <img src={settingImg} alt="Setting function logo" />
        </button>
      </div>
      {help && (
        <div className={classes.message}>
          <p>Don't click on the same picture twice!!</p>
        </div>
      )}
    </>
  );
}
