import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const Home = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const data = [
    {
      option: "Navneet",
      style: { backgroundColor: "green", textColor: "black" },
    },
    {
      option: "Jaspreet",
      style: { backgroundColor: "red", textColor: "black" },
    },
    {
      option: "Jaswant",
      style: { backgroundColor: "pink" },
      textColor: "black",
    },
    {
      option: "Arun",
      style: { backgroundColor: "skyblue" },
      textColor: "black",
    },
    {
      option: "Anuj",
      style: { backgroundColor: "gray" },
      textColor: "black",
    },
    {
      option: "Kamal",
      style: { backgroundColor: "purple" },
      textColor: "black",
    },
    {
      option: "Kartik",
      style: { backgroundColor: "blue" },
      textColor: "black",
    },
  ];
  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    console.log(newPrizeNumber);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };
  return (
    <div>
      <h1>Spin Winner</h1>
      {!mustSpin && mustSpin !== undefined && (
        <h3>Selected Value: - {data[prizeNumber].option}</h3>
      )}
      <Wheel
        mustStartSpinning={mustSpin}
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
