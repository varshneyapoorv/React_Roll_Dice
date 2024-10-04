import React from "react";

const StartGame = ({ toggle }) => {
  return (
    <div>
      <div className="container  text-center flex mx-auto h-screen items-center">
        <div>
          <img src="/images/dices.png" alt="Dices" className="mx-auto" />
        </div>
        <div
          className=" flex-col
         "
        >
          <h2 className="font-bold text-7xl whitespace-nowrap">Dice Game</h2>

          <div className="flex justify-center items-center bg-black border-2 border-white text-white gap-2.5 px-14 min-w-[220px] py-2 rounded-lg mt-7 hover:cursor-pointer hover:bg-red-500">
            <button
              onClick={toggle}
              className="text-white bg-transparent hover:bg-red-500 hover:text-black transition-colors  "
            >
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
