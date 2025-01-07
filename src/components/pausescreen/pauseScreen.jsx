import classes from "./pauseScreen.module.css";
import classes2 from "../loadingscreen/loadingscreen.module.css";
import homeIcon from "../../assets/images/home.svg";
import playIcon from "../../assets/images/play.svg";
import restartIcon from "../../assets/images/restart.svg";
export default function PauseScreen({
  homeCallback,
  restartCallback,
  resumeCallback,
}) {
  return (
    <>
      <div className={classes2.screen}>
        <div className={classes.screen}>
          <div className={classes.img}>
            <img src="/images/mtg_logo.svg" alt="Magic The Gathering Logo" />
          </div>
          <div className={classes.buttonGroup}>
            <button className={classes.button} onClick={homeCallback}>
              <img src={homeIcon} alt="Home Icon" />
            </button>
            <button className={classes.button} onClick={resumeCallback}>
              <img src={playIcon} alt="Play Icon" />
            </button>
            <button className={classes.button} onClick={restartCallback}>
              <img src={restartIcon} alt="Restart Icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
