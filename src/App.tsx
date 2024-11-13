import { useState } from "react";
import "./App.css";

function App() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  if (isClicked) {
    return <div>EEEEEEEEEE!</div>;
  }

  return (
    <button onClick={() => setIsClicked((prev) => !prev)}>Click me!</button>
  );
}

export default App;
