import React from "react";
import p1 from "../Assets/s2.jpg";
import p2 from "../Assets/p2.jpg";
import p3 from "../Assets/p3.jpg";
import p4 from "../Assets/p4.jpg";
import p5 from "../Assets/p12.jpg";
import s1 from "../Assets/s7.jpg";
import p6 from "../Assets/p5.jpg";
import p8 from "../Assets/s3.jpg";

const Destination = () => {
  return (
    <div className="max-w-[1240px] text-center mx-auto py-16 px-3">
      <h1>All Inclusive Resorts</h1>
      <p className="py-4">On the Africa's best Places</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-5">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={p6}
          alt=""
        />
        <img className="w-full h-full object-cover" src={p1} alt="" />
        <img className="w-full h-full object-cover" src={p5} alt="" />
        <img className="w-full h-full object-cover" src={s1} alt="" />
        <img className="w-full h-full object-cover" src={p8} alt="" />
      </div>
    </div>
  );
};

export default Destination;
