import commaNumber from "comma-number";
import React from "react";
import { ArrowDown, ArrowUp, DownGraph, UpGraph } from "../assets/svg";

const CoinItem = (props: any) => {
  const { icon, name, label, priceDirection, percentage, price } = props;
  return (
    <div className="border-b border-[#ECECEC] last:border-transparent flex items-center w-full pb-3 mb-3">
      <div className="flex flex-1 gap-x-2 items-center min-w-[150px]">
        {icon}
        <div className="flex flex-col gap-y-1 ml-1">
          <h3 className="text-black text-base font-cerebri">{name}</h3>
          <h5 className="text-[14px] text-[#8A90A8]">{label}</h5>
        </div>
      </div>
      <div className="flex  flex-1  min-w-[120px]">
        {priceDirection == "up" ? <UpGraph /> : <DownGraph />}
      </div>
      <div className="text-black flex  flex-1  min-w-[120px] ">
        ${commaNumber(price)}
      </div>

      <div
        className={` items-center  flex  flex-1  min-w-[120px] ${
          percentage >= 1 ? "text-[#40BF6A]" : "text-[#DF2040]"
        }`}
      >
        {percentage >= 1 ? <ArrowUp /> : <ArrowDown />}
        {percentage >= 1 ? "+" : "-"}
        {percentage}%
      </div>
      <div className="flex flex-1  min-w-[120px] border bg-white border-[#ECECEC]">
        <button className=" bg-gray-100 text-syarpamainblue w-[95.5px] h-[40px] p-[10px] text-center">
          Buy
        </button>
        <button className="bg-white  text-syarpamainblue w-[95.5px] h-[40px] p-[10px] text-center">
          Sell
        </button>
      </div>
    </div>
  );
};

export default CoinItem;
