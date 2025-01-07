import classes from "./home.module.css";
export default function Home({callback}) {
  return (
    <>
      <div className={classes.home}>
        <div className={classes.img}>
          <img src="/images/mtg_logo.svg" alt="Magic The Gathering Logo" />
        </div>
        <h1>Memory Card</h1>
        <button onClick={()=>{
          callback(10);
        }}>
          <h2>Easy</h2>
        </button>
        <button onClick={()=>{
          callback(15);
        }}>
          <h2>Medium</h2>
        </button>
        <button onClick={()=>{
          callback(20)
        }}>
          <h2>Hard</h2>
        </button>
      </div>
    </>
  );
}
