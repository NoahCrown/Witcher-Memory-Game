import { useEffect, useState } from "react";
import Game from "./components/Game";
import Navbar from "./components/Navbar";
import Score from "./components/Score";
import jsonData from './components/WitcherCharacters.json'

function App() {
  const [characters, setCharacters] = useState([])

  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [lastClicked, setLastClicked] = useState(null);

  const shuffleData = () => {
    const shuffledCharacters = [...characters];
    for (let i = shuffledCharacters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCharacters[i], shuffledCharacters[j]] = [
        shuffledCharacters[j],
        shuffledCharacters[i],
      ];
    }
    setCharacters(shuffledCharacters);
  };

  const handleClick = (character) => {
    console.log(character.id)
    shuffleData()
    if (lastClicked === null || lastClicked.id !== character.id) {
      setScore((prevScore) => prevScore + 1);
      setLastClicked(character);
    } else {
      setScore(0);
      setLastClicked(null);
    }
    updateHighestScore();

  };

  const updateHighestScore = () => {
    if (score > highestScore) {
      setHighestScore(score);
    }
  };

  useEffect(() => {
    setCharacters(jsonData.characters);
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Score score={score} highestScore={highestScore}/>
      <Game characters={characters} handleClick={handleClick}/>
    </div>
  );
}

export default App;
