import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const Home = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    { option: "0", style: { backgroundColor: "green", textColor: "black" } },
    { option: "1", style: { backgroundColor: "white" } },
    { option: "2" },
  ];
  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  return (
    <div>
      <h3>Selected Value: -{data[prizeNumber].completeOption}</h3>
      <Wheel
        mustStartSpinning={mustSpin}
        // prizeNumber={3}
        outerBorderColor={["#ccc"]}
        outerBorderWidth={[9]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["tranparent"]}
        radiusLineWidth={[1]}
        textColors={["#f5f5f5"]}
        textDistance={55}
        fontSize={[10]}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button
        className="prize-message"
        onClick={handleSpinClick}
        disabled={mustSpin}
      >
        Spin
      </button>
    </div>
  );
};

export default Home;
