import React from "react";
import { Bell, SwapIcon } from "../assets/svg"
import { HeaderTypes } from "../types";

const Header = (props: HeaderTypes) => {
  const { pageName="Dashboard" } = props;
  return <div className="ml-auto w-[85%] text-white bg-white h-24 flex items-center justify-between pr-4">
  <ul className="flex text-syarpamainblue items-center">
    <li className="text-[18px] font-normal border-r border-syarpamainblue last:border-transparent mr-2 pr-2">
      {pageName}
    </li>
    <li className="text-[20px] font-normal  mr-2 pr-2">
      Good evening Shola
    </li>
  </ul>
  <div className="flex items-center gap-x-3">
    <div className="relative">
      <div className="bg-syarpamainpink absolute rounded-[50%] w-[10px] h-[10px] items-center justify-center text-xs flex right-0 top-0 text-white" />
      <Bell />
    </div>
    <button className="bg-syarpamainpink p-2 flex items-center gap-x-2 justify-center min-w-fit w-[179px] text-base">
      <SwapIcon /> Swap Coins
    </button>
  </div>
</div>;
};

export default Header;
