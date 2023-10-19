import React from "react";
import { useSelector } from "react-redux";
const App = () => {
  const formTypes = useSelector((state) => state.formTypes.value);
  return (
    <div>
      <h1>Ide Type</h1>
    </div>
  );
};

export default App;
