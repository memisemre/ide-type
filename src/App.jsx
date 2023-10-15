import React from "react";
import HTML from "./Words/html.json";

const App = () => {
  return (
    <main>
      {HTML.words.map((word, index) => (
        <p key={index}>{word}</p>
      ))}
    </main>
  );
};

export default App;
