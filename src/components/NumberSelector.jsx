import React, { useState } from "react";

const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <div className="flex flex-col items-start">
      <div className="flex gap-6">
        {arrNumber.map((item, i) => (
          <span
            key={i}
            className={`h-[72px] w-[72px] border border-black grid place-items-center text-[24px] font-bold cursor-pointer ${
              item === selectedNumber ? "bg-black text-white" : ""
            }`}
            onClick={() => setSelectedNumber(item)}
          >
            {item}
          </span>
        ))}
      </div>
      <p className="font-semibold text-xl">Selected Number: {selectedNumber}</p>
    </div>
  );
};

export default NumberSelector;
