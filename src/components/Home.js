import React from "react";
import { Wheel } from "react-custom-roulette";

const Home = () => {
  const data = [
    { option: "0", style: { backgroundColor: "green", textColor: "black" } },
    { option: "1", style: { backgroundColor: "white" } },
    { option: "2" },
  ];
  return (
    <div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={3}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
      />
    </div>
  );
};

export default Home;
