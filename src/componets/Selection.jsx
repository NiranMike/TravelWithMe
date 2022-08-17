import React from "react";
import Lagos from "../Assets/Lagos.jpg";
import Lome from "../Assets/Lome.jpg";
import nairobi from "../Assets/nairobi.jpg";
import Accra from "../Assets/Accra.jpg";
import Abidjan from "../Assets/Abidjan.jpg";
import CapeTown from "../Assets/Cape_Town.jpg";
import SelectCard from "./SelectCard";

const Selection = () => {
  return (
    <div className="max-w-[1240px] grid sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-5 px-4 py-16">
      <SelectCard bg={nairobi} text="Nairobi" />
      <SelectCard bg={Accra} text="Accra" />
      <SelectCard bg={CapeTown} text="Cape Town" />
      <SelectCard bg={Abidjan} text="Abidjan" />
      <SelectCard bg={Lome} text="Lome" />
      <SelectCard bg={Lagos} text="Lagos" />
    </div>
  );
};

export default Selection;
