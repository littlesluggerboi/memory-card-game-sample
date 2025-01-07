import classes from "./scoreboard.module.css"
export default function ScoreBoard({ score = 0, bestScore = 0 }) {
  return (
    <>
      <div className={classes.scoreboard}>
        <h2>Score: {score}</h2>
        <h2>Best Score: {bestScore}</h2>
      </div>
    </>
  );
}
