import classes from "./scorescreen.module.css";
import classes2 from "../loadingscreen/loadingscreen.module.css";
import homeImg from "../../assets/images/home.svg"
import restartImg from "../../assets/images/restart.svg"
export default function ScoreScreen({homeCalback, restartCallback, score=0, total=0}) {
  return (
    <>
      <div className={classes2.screen}>
        <div className={classes.screen}>
          <img src="/images/mtg_logo.svg" alt="Magic The Gathering Logo" />
          <h1>{score}/{total}</h1>
          <div className={classes.buttonGroup}>
            <button onClick={homeCalback}>
                <img src={homeImg} alt="Home Icon" />
            </button>
            <button onClick={restartCallback}>
                <img src={restartImg} alt="Restart Icon" />
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
}
