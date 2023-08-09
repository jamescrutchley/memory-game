import "../App.css";
import { Header } from "./header";
import { Gameboard } from "./gameboard/gameboard";
import { Footer } from "./footer";
import { useState, useEffect } from "react";
import { Scoreboard } from "./gameboard/scoreboard";
import { shuffleArray } from "../helperFunctions";

const mockCards = () => {
  let cardArray = [];
  for (let i = 0; i < 15; i++) {
    let cardObj = { value: i, alt: `Card ${i}`, selected: false };
    cardArray.push(cardObj);
  }
  return cardArray;
};

export function Controller() {
  const [gameover, setGameover] = useState(false);
  const [cards, setCards] = useState([]);
  const [highscore, setHighscore] = useState(0);
  const [cardsToDisplay, setCardsToDisplay] = useState([]);

  const currentScore = cards.filter((card) => card.selected).length;
  const shouldPassCardArray = (list) => list.some((card) => card !== undefined);
  const checkGameOver = () => currentScore >= cards.length;

  const updateHighscore = () => {
    setHighscore((prevHighscore) =>
      currentScore > prevHighscore ? currentScore : prevHighscore
    );
  };

  useEffect(() => {
    setCards(mockCards());
  }, []);

  useEffect(() => {
    //allows double ups. fix.
    const feedCards = () => {
      let feedArray = new Set();
      let shuffledCopy = shuffleArray([...cards]); // Create a new array from shuffled copy
      //ensure at least one as yet unselected card:
      const unselectedCard = shuffledCopy.find((card) => !card.selected);
      if (!unselectedCard) {
        console.log("game-over");
        return;
      }

      feedArray.add(unselectedCard);

      //two more random cards
      while (Array.from(feedArray).length < 3) {
        const randomCard = shuffledCopy.pop();
        console.log(randomCard);
        feedArray.add(randomCard);
      }
      console.log(feedArray);

      setCardsToDisplay(Array.from(feedArray));
    };
    feedCards(); // Call feedCards() whenever cards state changes
  }, [cards, gameover]);

  const selectedCard = (selectedValue) => {
    setGameover(checkGameOver());
    if (cards.find((card) => card.value === selectedValue).selected === true) {
      setGameover(true);
      updateHighscore();
    }


    const updatedCards = cards.map((card) =>
      card.value === selectedValue ? { ...card, selected: true } : card
    );

    setCards(updatedCards);
  };

  const reset = () => {
    const updatedCards = cards.map((card) => ({ ...card, selected: false }));
    setCards(updatedCards);
    setCardsToDisplay([]);
    setGameover(false);
  };

  return (
    <div className="controller">
      <Header />
      <Gameboard
        onClick={selectedCard}
        cardArray={shouldPassCardArray(cardsToDisplay) ? cardsToDisplay : null}
        gameover={gameover}
        reset={reset}
      />
      <Scoreboard scores={[currentScore, highscore]} />
      <Footer />
      {/* <button onClick={() => changeState(0)}>test state change</button> */}
    </div>
  );
}
