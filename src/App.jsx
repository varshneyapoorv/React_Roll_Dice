import { useState } from "react";
import StartGame from "./components/StartGame";
import "./index.css";
import GamePlay from "./components/GamePlay";

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  const toggleGamePlay = () => {
    console.log("Button clicked");
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </>
  );
}
