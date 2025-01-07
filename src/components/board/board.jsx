import classes from "./board.module.css";
import Card from "../card/card";
export default function Board({cards, callback}) {
  return (
    <>
      <div className={classes.board}>
        {cards.map(item=>{
          return <Card item={item} key={item.id} callback={callback}/>
        })}
      </div>
    </>
  );
}
