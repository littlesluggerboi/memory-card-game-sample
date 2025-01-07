import "./App.css";
import { get, shuffle } from "./components/game";
import Home from "./components/homescreen/home";
import LoadingScreen from "./components/loadingscreen/loadingscreen";
import PauseScreen from "./components/pausescreen/pauseScreen";
import ScoreScreen from "./components/scorescreen/scorescreen";
import Functions from "./components/functions/functions";
import PlayingScreen from "./components/playingscreen/playingscreen";
import { useState } from "react";

export default function App() {
  const [score, setScore] = useState({
    best: 0,
    current: [],
  });
  const [overlay, setOverlay] = useState("");
  const [main, setMain] = useState("home");
  const [cards, setCards] = useState([]);
  const [num, setNum] = useState(10);
  function removeOverlay() {
    setOverlay("");
  }

  function goHome() {
    setMain("home");
    removeOverlay();
  }

  function pauseScreen() {
    setOverlay("pause");
  }

  function play(numberOfCards = 10) {
    setScore({ ...score, current: [] });
    setNum(numberOfCards);
    setMain("none");
    setOverlay("loading");
    get(numberOfCards).then((value) => {
      removeOverlay();
      setCards(value.cards);
      setMain("playing");
    });
  }

  function cardOnlick(id) {
    if (score.current.includes(id)) {
      setOverlay("score");
    } else if (score.current.length + 1 == cards.length) {
      let best = score.best;
      if (best < score.current.length + 1) {
        best = score.current.length + 1;
      }
      setScore({
        best: best,
        current: [...score.current, id],
      });
      setOverlay("score");
    } else {
      let best = score.best;
      if (best < score.current.length + 1) {
        best = score.current.length + 1;
      }
      setScore({
        best: best,
        current: [...score.current, id],
      });
      setCards(shuffle(cards));
    }
  }

  function restart() {
    removeOverlay();
    setScore({ ...score, current: [] });
    play(num);
  }

  return (
    <>
      <Functions callback={pauseScreen} />

      {main === "home" ? (
        <Home callback={play} />
      ) : main === "playing" ? (
        <PlayingScreen
          cardClick={cardOnlick}
          cards={cards}
          score={score.current.length}
          best={score.best}
        />
      ) : null}

      {overlay === "loading" ? (
        <LoadingScreen />
      ) : overlay === "score" ? (
        <ScoreScreen
          homeCalback={goHome}
          restartCallback={restart}
          score={score.current.length}
          total={cards.length}
        />
      ) : overlay === "pause" ? (
        <PauseScreen
          homeCallback={goHome}
          resumeCallback={removeOverlay}
          restartCallback={restart}
        />
      ) : null}
    </>
  );
}
