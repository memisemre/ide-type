export const randomWordGenerator = (repeatCount) => {
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const wordLength = 5;
  const result = [];

  for (let j = 0; j < repeatCount; j++) {
    let word = "";
    for (let i = 0; i < wordLength; i++) {
      const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
      word += CHARACTERS.charAt(randomIndex);
    }
    result.push(word);
  }

  return result;
};
