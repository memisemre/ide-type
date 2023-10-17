import React from "react";
const RandomWordGenerator = () => {
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    result += CHARACTERS.charAt(randomIndex);
  }
  return <p>{result}</p>;
};

export default RandomWordGenerator;
