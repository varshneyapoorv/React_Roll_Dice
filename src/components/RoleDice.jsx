import React, { useState } from 'react';

const RoleDice = () => {
  const [currentState, setCurrentState] = useState(1); // Initialize with a default dice face

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const handleDiceRoll = () => {
    const newNumber = generateRandomNumber(1, 7); // 7 is exclusive
    setCurrentState(newNumber);
  };

  return (
    <div className="flex flex-col justify-center items-center" onClick={handleDiceRoll}>
      <div className="mt-20">
        <img src={`/images/dice/dice_${currentState}.png`} alt={`dice${currentState}`} />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
};

export default RoleDice;
