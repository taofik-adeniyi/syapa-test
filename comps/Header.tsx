import React, { useState } from "react";
import {
  Bell,
  SwapIcon,
  WhiteBell,
  BlueBell,
  SyarpaLogo,
  SyarpaLogoWhite,
  BoxMenu,
} from "../assets/svg";
import useWidth from "../hooks/useWidth";
import { HeaderTypes } from "../types";
import MobileSidebar from "./MobileSidebar";

const Header = (props: HeaderTypes) => {
  const [width] = useWidth();
  const { pageName = "Dashboard" } = props;
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  return (
    <div className="top-0 fixed md:relative z-50 ml-0 md:ml-auto w-full md:w-[85%] text-white h-24 bg-syarpamainblue md:bg-white flex items-center justify-between pr-4 border-b border-syarpasecondaryarsh border-opacity-25 md:border-0">
      <ul className="hidden md:flex flex-col md:flex-row text-white md:text-syarpamainblue items-start md:items-center m-0 p-2 md:p-0">
        <li className="text-sm md:text-[18px] font-normal border-r border-syarpamainblue last:border-transparent mr-2 pr-2">
          {pageName}
        </li>
        <li className="text-base md:text-[20px] font-normal  mr-2 pr-2">
          Good evening Shola
        </li>
      </ul>
      {width <= 768 && (
        <div className="flex items-center ml-2 gap-x-2">
          <button
            className="appearance-none bg-white -mt-2"
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <BoxMenu />
          </button>
          <SyarpaLogoWhite />
        </div>
      )}
      {/* {width <= 768 && (
        <h1 className="text-2xl font-bold text-white">Syarpa</h1>
      )} */}
      <div className="flex items-center gap-x-3">
        <div className="relative">
          <div className="bg-syarpamainpink absolute rounded-[50%] w-[10px] h-[10px] items-center justify-center text-xs flex right-0 top-0 text-white" />
          {width <= 768 ? <WhiteBell /> : <BlueBell />}
          {/* <Bell /> */}
        </div>
        <button className="bg-syarpamainpink p-2 flex items-center gap-x-2 justify-center min-w-fit md:w-[179px] text-base">
          <SwapIcon /> Swap Coins
        </button>
      </div>

      {mobileMenu && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-white"
          style={{ zIndex: 99999 }}
        >
          <MobileSidebar setMobileMenu={() => setMobileMenu(!mobileMenu)} />
        </div>
      )}
    </div>
  );
};

export default Header;
