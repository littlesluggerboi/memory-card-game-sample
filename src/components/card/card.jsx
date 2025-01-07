import classes from "./card.module.css"
export default function Card({ item, callback }) {
  function onClick(){
    callback(item.id)
  }
  return (
    <>
      <div className={classes.card} onClick={onClick}>
        <img src={item.imageUrl} alt={item.name}/>
      </div>
    </>
  );
}
