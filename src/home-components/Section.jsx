import React from "react";
import Burgers from "./Burgers";
import Slider from "./Slider";

const Section = () => {
  return (
    <div className="my-3">
      <Slider />
      <Burgers />
    </div>
  );
};

export default Section;
