import React from "react";
import { Bell, SwapIcon } from "../assets/svg";
import { HeaderTypes } from "../types";

const Header = (props: HeaderTypes) => {
  const { pageName = "Dashboard" } = props;
  return (
    <div className="ml-0 md:ml-auto w-full md:w-[85%] text-white h-24 flex items-center justify-between pr-4 border-b border-syarpasecondaryarsh border-opacity-25 md:border-0">
      <ul className="flex flex-col md:flex-row text-syarpamainblue items-start md:items-center m-0 p-2 md:p-0">
        <li className="text-sm md:text-[18px] font-normal border-r border-syarpamainblue last:border-transparent mr-2 pr-2">
          {pageName}
        </li>
        <li className="text-base md:text-[20px] font-normal  mr-2 pr-2">
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
    </div>
  );
};

export default Header;
