import '../App.css';
import { Header } from './header';
import { Gameboard } from './gameboard/gameboard';
import { Footer } from './footer';
import { useState, useEffect } from 'react';
import { Scoreboard } from './gameboard/scoreboard';

const mockCards = () => {
    let cardArray = []
    for (let i = 0; i < 15; i++) {
        let cardObj = {value: i, alt: `Card ${i}`, selected: false}
        cardArray.push(cardObj)
    }
    return cardArray;
}

export function Controller() {
    const [cards, setCards] = useState([]);
    const [highscore, setHighscore] = useState(0);

    const currentScore = cards.filter((card => card.selected)).length;


    // API call - useEffect on component load.

    useEffect(() => {
        setCards(mockCards())
    }, [])

    console.log(cards)

    return (
        <div className="controller">
            <Header />
            <Gameboard cardArray={cards.slice(0,3)} />
            <Scoreboard scores={[currentScore, highscore]} />
            <Footer />
        </div>
    )
}



