import React from "react";
import Bredcom from "../Bredcom/Main";
import Testimonial from "../Menhome/Testimonial";
import What from "../Menservise/What";
import Prising from "../Pages/MenPricing/First";

function Main() {
  return (
    <>
      <Bredcom title="Services" subtitle="Home" subtitledown="Pricing" />
      <What />
      <Testimonial />
      <Prising />
    </>
  );
}

export default Main;
