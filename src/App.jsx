import React, { useState } from "react";
import { randomWordGenerator } from "./randomWordGenerator/randomWordGenerator";

const App = () => {
  const [wordCount, setWordCount] = useState(0);
  const [words, setWords] = useState([]);
  const [startedGame, setStartedGame] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [trueAnswers, setTrueAnswers] = useState(0);
  const [falseAnswers, setFalseAnswers] = useState(0);
  const [gameInputContext, setGameInputContext] = useState("");

  const handleInputChange = (e) => {
    setWordCount(e.target.value);
  };

  const startGame = () => {
    if (wordCount !== 0) {
      const generatedWords = randomWordGenerator(wordCount);
      setWords(generatedWords);
      setStartedGame(true);
    }
  };

  const updateWords = () => {
    setCurrentWord(currentWord + 1);
  };

  const handleGameInput = (e) => {
    setGameInputContext(e.target.value);
    if (e.target.value.includes(" ")) {
      if (gameInputContext === words[currentWord]) {
        setTrueAnswers(trueAnswers + 1);
      } else {
        setFalseAnswers(falseAnswers + 1);
      }
      setGameInputContext("");
      updateWords();
    }
  };

  if (!startedGame) {
    return (
      <>
        <input type="number" placeholder="Words" onChange={handleInputChange} />
        <button onClick={startGame}>Start Game</button>
      </>
    );
  } else {
    if (words) {
      return (
        <>
          <p>True Answers {trueAnswers}</p>
          <p>False Answers {falseAnswers}</p>
          <input
            type="text"
            onChange={handleGameInput}
            value={gameInputContext}
          />
          <p>Current Word {currentWord}</p>
          {words.map((word, index) => {
            return <p key={index}>{word}</p>;
          })}
        </>
      );
    }
  }
};

export default App;
