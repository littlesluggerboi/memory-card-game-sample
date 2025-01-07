import classes from "./loadingscreen.module.css";

export default function LoadingScreen() {
  return (
    <>
      <div className={classes.screen}>
        <div className={classes.img}>
          <img src="/images/mtg_logo.svg" alt="MTG Logo" />
        </div>

        <h1 className={classes.loading}>Loading...</h1>
      </div>
    </>
  );
}
