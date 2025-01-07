
import Board from "../board/board";
import ScoreBoard from "../scoreboard/scoreboard";

export default function PlayingScreen({ cardClick, cards, score, best }) {
    return (
    <>
      <header>
        <img src="/images/mtg_logo.svg" alt="Magic The Gathering Logo" />
        <ScoreBoard score={score} bestScore={best} />
      </header>
      <main>
        <section>
          <Board cards={cards} callback={cardClick} />
          <h1>
            {score}/{cards.length}
          </h1>
        </section>
      </main>
    </>
  );
}
