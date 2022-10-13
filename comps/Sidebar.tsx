import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  DropDownIcon,
  HelpIcon,
  SettingsIcon,
  SyarpaLogo,
} from "../assets/svg";
import userImg from "../assets/img/user_img.png";

const sideBarNavigation = [
  {
    name: "Dashboard",
    pathname: `/`,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.4188 16.7737C16.4188 16.9834 16.3355 17.1845 16.1872 17.3328C16.0389 17.481 15.8378 17.5644 15.6281 17.5644H4.5583C4.34859 17.5644 4.14748 17.481 3.99919 17.3328C3.85091 17.1845 3.7676 16.9834 3.7676 16.7737V9.65738H1.39551L9.56104 2.23431C9.70662 2.10185 9.89636 2.02844 10.0932 2.02844C10.29 2.02844 10.4797 2.10185 10.6253 2.23431L18.7909 9.65738H16.4188V16.7737ZM7.72109 8.86668V13.6109H12.4653V8.86668H7.72109ZM9.30248 10.4481H10.8839V12.0295H9.30248V10.4481Z"
          fill="#2033A0"
        />
      </svg>
    ),
  },
  {
    name: "Money Transfer",
    pathname: `/money-transfer`,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.3397 3.31773C17.2597 3.23807 17.1586 3.18292 17.0483 3.15875C16.938 3.13459 16.8231 3.14243 16.7171 3.18133L3.67055 7.92552C3.55804 7.9682 3.46117 8.04409 3.39281 8.14313C3.32445 8.24217 3.28784 8.35966 3.28784 8.48C3.28784 8.60033 3.32445 8.71782 3.39281 8.81686C3.46117 8.9159 3.55804 8.9918 3.67055 9.03447L8.76462 11.0685L12.5244 7.29691L13.3606 8.13308L9.58299 11.9106L11.623 17.0047C11.6669 17.115 11.743 17.2096 11.8413 17.2763C11.9397 17.3429 12.0557 17.3784 12.1745 17.3783C12.2943 17.3759 12.4106 17.3371 12.508 17.2673C12.6054 17.1974 12.6794 17.0996 12.7201 16.9869L17.4643 3.9404C17.5047 3.83548 17.5144 3.72124 17.4924 3.61099C17.4703 3.50075 17.4174 3.39904 17.3397 3.31773Z"
          fill="#2033A0"
        />
      </svg>
    ),
  },
  {
    name: "Wallets",
    pathname: `/wallets`,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.657 10.076C13.1065 10.076 12.5785 10.2947 12.1893 10.6839C11.8001 11.0732 11.5814 11.6011 11.5814 12.1516C11.5814 12.7021 11.8001 13.23 12.1893 13.6192C12.5785 14.0085 13.1065 14.2272 13.657 14.2272H17.5116V17.1923H3.27905V7.11088H17.5116V10.076H13.657ZM14.25 13.0411H13.657C13.421 13.0411 13.1948 12.9474 13.028 12.7806C12.8611 12.6138 12.7674 12.3875 12.7674 12.1516C12.7674 11.9157 12.8611 11.6894 13.028 11.5226C13.1948 11.3558 13.421 11.262 13.657 11.262H14.25C14.4859 11.262 14.7122 11.3558 14.879 11.5226C15.0458 11.6894 15.1395 11.9157 15.1395 12.1516C15.1395 12.3875 15.0458 12.6138 14.879 12.7806C14.7122 12.9474 14.4859 13.0411 14.25 13.0411ZM12.7674 2.95972L15.1395 5.92483H8.02324L12.7674 2.95972Z"
          fill="#2033A0"
        />
      </svg>
    ),
  },
  {
    name: "Recipients",
    pathname: `/recipients`,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2910_7604)">
          <path
            d="M9.20924 17.0062C9.20924 17.0062 8.02319 17.0062 8.02319 15.8202C8.02319 14.6341 9.20924 11.076 13.9534 11.076C18.6976 11.076 19.8837 14.6341 19.8837 15.8202C19.8837 17.0062 18.6976 17.0062 18.6976 17.0062H9.20924ZM13.9534 9.88996C14.8971 9.88996 15.8021 9.51509 16.4694 8.84781C17.1367 8.18052 17.5116 7.2755 17.5116 6.33182C17.5116 5.38814 17.1367 4.48312 16.4694 3.81584C15.8021 3.14856 14.8971 2.77368 13.9534 2.77368C13.0097 2.77368 12.1047 3.14856 11.4374 3.81584C10.7702 4.48312 10.3953 5.38814 10.3953 6.33182C10.3953 7.2755 10.7702 8.18052 11.4374 8.84781C12.1047 9.51509 13.0097 9.88996 13.9534 9.88996Z"
            fill="#2033A0"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.0934 17.0063C6.91758 16.636 6.82989 16.2301 6.83721 15.8203C6.83721 14.2132 7.64373 12.5586 9.1334 11.4082C8.38986 11.1791 7.6152 11.067 6.83721 11.0761C2.09303 11.0761 0.906982 14.6342 0.906982 15.8203C0.906982 17.0063 2.09303 17.0063 2.09303 17.0063H7.0934Z"
            fill="#2033A0"
          />
          <path
            d="M6.24417 9.88995C7.03057 9.88995 7.78476 9.57755 8.34082 9.02149C8.89689 8.46542 9.20929 7.71123 9.20929 6.92483C9.20929 6.13844 8.89689 5.38425 8.34082 4.82818C7.78476 4.27211 7.03057 3.95972 6.24417 3.95972C5.45777 3.95972 4.70358 4.27211 4.14752 4.82818C3.59145 5.38425 3.27905 6.13844 3.27905 6.92483C3.27905 7.71123 3.59145 8.46542 4.14752 9.02149C4.70358 9.57755 5.45777 9.88995 6.24417 9.88995Z"
            fill="#2033A0"
          />
        </g>
        <defs>
          <clipPath id="clip0_2910_7604">
            <rect
              width="18.9767"
              height="18.9767"
              fill="white"
              transform="translate(0.906982 0.401611)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "Invite",
    pathname: `/invite`,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2910_7611)">
          <path
            d="M9.13024 6.5411V9.07134H0.906982V6.5411H9.13024ZM11.6605 6.5411V9.07134H19.8837V6.5411H11.6605ZM2.1721 10.3365V16.0295C2.1721 16.5328 2.37203 17.0155 2.72791 17.3713C3.0838 17.7272 3.56648 17.9272 4.06977 17.9272H9.13024V10.3365H2.1721ZM11.6605 10.3365V17.9272H16.7209C17.2242 17.9272 17.7069 17.7272 18.0628 17.3713C18.4187 17.0155 18.6186 16.5328 18.6186 16.0295V10.3365H11.6605ZM14.1907 0.215523C13.3288 0.188251 12.4833 0.4553 11.7935 0.972694C11.1036 1.49009 10.6105 2.22698 10.3954 3.06203C10.1802 2.22698 9.6871 1.49009 8.99724 0.972694C8.30738 0.4553 7.4619 0.188251 6.60001 0.215523C6.26488 0.204987 5.93115 0.26323 5.6194 0.386657C5.30765 0.510085 5.0245 0.696079 4.78742 0.933166C4.55033 1.17025 4.36434 1.4534 4.24091 1.76515C4.11748 2.0769 4.05924 2.41063 4.06977 2.74576C4.01447 3.08055 4.03776 3.42363 4.13783 3.74787C4.23789 4.07212 4.41198 4.36866 4.64634 4.61406C4.88071 4.85947 5.16892 5.04702 5.48822 5.1619C5.80752 5.27677 6.14916 5.31583 6.48615 5.27599H14.2413C14.5859 5.33003 14.9384 5.30188 15.2701 5.19384C15.6017 5.0858 15.9032 4.90092 16.1498 4.65427C16.3965 4.40762 16.5814 4.10618 16.6894 3.77452C16.7974 3.44286 16.8256 3.09036 16.7715 2.74576C16.7716 2.40918 16.7045 2.07597 16.5742 1.76564C16.4439 1.45532 16.253 1.17411 16.0127 0.938479C15.7723 0.702851 15.4874 0.517543 15.1745 0.393404C14.8617 0.269265 14.5272 0.208791 14.1907 0.215523ZM6.60001 4.01087C6.42998 4.02643 6.25861 4.00439 6.09805 3.94631C5.93749 3.88823 5.79168 3.79554 5.67095 3.67481C5.55022 3.55408 5.45753 3.40827 5.39945 3.24771C5.34137 3.08715 5.31933 2.91578 5.33489 2.74576C5.31933 2.57573 5.34137 2.40436 5.39945 2.2438C5.45753 2.08324 5.55022 1.93743 5.67095 1.8167C5.79168 1.69597 5.93749 1.60328 6.09805 1.5452C6.25861 1.48712 6.42998 1.46508 6.60001 1.48064C7.27107 1.48064 7.91464 1.74722 8.38915 2.22173C8.86366 2.69624 9.13024 3.33981 9.13024 4.01087H6.60001ZM14.1907 4.01087H11.6605C11.6605 3.33981 11.927 2.69624 12.4016 2.22173C12.8761 1.74722 13.5196 1.48064 14.1907 1.48064C14.5262 1.48064 14.848 1.61393 15.0853 1.85118C15.3225 2.08844 15.4558 2.41023 15.4558 2.74576C15.4714 2.91578 15.4493 3.08715 15.3913 3.24771C15.3332 3.40827 15.2405 3.55408 15.1198 3.67481C14.999 3.79554 14.8532 3.88823 14.6927 3.94631C14.5321 4.00439 14.3607 4.02643 14.1907 4.01087Z"
            fill="#2033A0"
          />
        </g>
        <defs>
          <clipPath id="clip0_2910_7611">
            <rect
              width="18.9767"
              height="18.9767"
              fill="white"
              transform="translate(0.906982 0.215576)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
];
const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <div className="bg-white p-5 pt-[1.2rem] fixed top-0 bottom-0 left-0 z-50 w-[15%] hidden md:block">
      <SyarpaLogo />

      <ul className="m-0 p-0 mt-10 flex flex-col mb-32">
        {sideBarNavigation.map((nav, idx) => {
          return (
            <li
              key={idx}
              className={` box-border p-2 text-syarpamainblue mb-3 flex  items-center gap-x-2 ${
                nav.pathname === pathname
                  ? "bg-[#DCDFF0] border-l border-[#FF276A]"
                  : ""
              }`}
            >
              {nav.icon}
              <Link href={nav.pathname}>{nav.name}</Link>
            </li>
          );
        })}
      </ul>
      <ul className="w-[98%] mx-auto flex flex-col m-0 p-0 mb-5">
        <li className="mb-2 p-2 flex items-center justify-between w-10/12 border-t border-[#ECECEC] pt-5">
          <div className="flex gap-x-2 items-center">
            <Image src={userImg} alt="User's image" />
            <h3 className="text-[17.4px] text-syarpamainblue">Adesola</h3>
          </div>
          <button>
            <DropDownIcon />
          </button>
        </li>
        <li className="mb-2 p-2 flex gap-x-2 items-center text-syarpamainblue cursor-pointer">
          <HelpIcon />
          <Link href="/help">Help</Link>
        </li>
        <li className="mb-2 p-2 flex gap-x-2 items-center text-syarpamainblue cursor-pointer">
          <SettingsIcon />
          <Link href="/settings">Settings</Link>
        </li>
      </ul>

      <div className="bg-gradient-to-r from-[#2033A0] to-[#00BAFF] rounded-[15.814px] px-6 min-h-[118.6px] flex flex-col justify-center">
        <div className="text-white text-[11.0698px] font-poppins text-center mb-3">
          Invite your friemds to get $5 worth of USDT
        </div>
        <button
          type="button"
          className="bg-white rounded-[15.814px] text-syarpamainblue text-[11.0698px] font-semibold w-full px-2 py-1"
        >
          Copy referal link
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
