import type { NextPage } from "next";
import Image from "next/image";
import {
  ArrowUp,
  BTCImage,
  EthereumImage,
  RippleImage,
  TetherImage,
  UpGraph,
  DownGraph,
  ArrowDown,
  Bell,
  SwapIcon,
} from "../assets/svg";
import Button from "../comps/Button";
import Header from "../comps/Header";
import Input from "../comps/Input";
import Sidebar from "../comps/Sidebar";
import WalletContainer from "../comps/WalletContainer";

interface CoinListTypes {
  name: string;
  label: string;
  icon?: React.ReactNode;
  priceDirection?: string;
  price: number;
  percentage: number;
}
const coinLists: CoinListTypes[] = [
  {
    name: "Bitcoin",
    label: "BTC",
    icon: <BTCImage />,
    priceDirection: "up",
    price: 45895,
    percentage: 1.6,
  },
  {
    name: "Ethereum",
    label: "ETH",
    icon: <EthereumImage />,
    priceDirection: "down",
    price: 45895,
    percentage: 0.86,
  },
  {
    name: "Ripple",
    label: "XRP",
    icon: <RippleImage />,
    priceDirection: "down",
    price: 45895,
    percentage: 0.86,
  },
  {
    name: "TETHER",
    label: "USDT",
    icon: <TetherImage />,
    priceDirection: "up",
    price: 45895,
    percentage: 1.6,
  },
];
const Home: NextPage = () => {
  return (
    <div className="bg-white m-0 p-0 relative">
      <Sidebar />
      <div className="ml-auto w-[85%] text-white bg-white h-24 flex items-center justify-between pr-4">
        <ul className="flex text-syarpamainblue items-center">
          <li className="text-[18px] border-r border-syarpamainblue last:border-transparent mr-2 pr-2">
            Dashboard
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
      </div>
      {/* <Header pageName="Dashboard" />
      <div className="send-naira-card bg-white flex justify-between items-end w-[704px] h-[254px]">
        <div className="flex flex-col gap-y-3 w-[70%]">
          <h1
            className="text-[30px] text-syarpamainblue font-cerebri"
            style={{ fontWeight: 700 }}
          >
            Send Naira and other currencies to other coutries without Hassle
          </h1>
          <p className="text-[20px] text-black font-cerebri">
            as low as N45 per dollar
          </p>
          <div className="gap-x-2 flex">
            <Button
              variant="primary"
              type="button"
              className="text-base font-cerebri w-[172.5px]"
            >
              Send Money
            </Button>
            <Button
              type="button"
              variant="outline"
              className="text-base font-cerebri w-[172.5px]"
            >
              Receive Money
            </Button>
          </div>
        </div>
        <div>
          <svg
            width="167"
            height="167"
            viewBox="0 0 167 167"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="167"
              height="167"
              rx="83.5"
              fill="#00BAFF"
              fill-opacity="0.1"
            />
            <path
              d="M105.599 124.192C103.804 124.192 102.059 123.593 100.643 122.488L84.5601 110.029L73.777 121.934C73.3023 122.457 72.6973 122.845 72.0238 123.058C71.3502 123.27 70.6322 123.301 69.9431 123.145C69.254 122.99 68.6186 122.654 68.1016 122.173C67.5846 121.692 67.2047 121.082 67.0006 120.405L58.9392 93.7388L44.4687 88.7105C42.9062 88.1666 41.5462 87.1599 40.5697 85.8245C39.5931 84.489 39.0461 82.8879 39.0015 81.234C38.9569 79.5801 39.4167 77.9519 40.3199 76.5657C41.223 75.1795 42.5267 74.101 44.0576 73.4737L115.572 44.6004C116.937 44.0455 118.426 43.8708 119.882 44.0949C121.338 44.319 122.706 44.9335 123.84 45.8731C124.975 46.8126 125.833 48.0421 126.325 49.4307C126.816 50.8194 126.922 52.3152 126.631 53.7592L113.609 117.672C113.223 119.512 112.217 121.164 110.758 122.351C109.299 123.538 107.476 124.186 105.595 124.188L105.599 124.192Z"
              fill="#00BAFF"
            />
            <path
              d="M70.8188 123.242C69.9625 123.242 69.1289 122.967 68.4411 122.457C67.7534 121.946 67.248 121.228 66.9997 120.409L58.3477 91.8348C58.078 90.945 58.1278 89.9888 58.4885 89.1318C58.8493 88.2748 59.4982 87.5708 60.3231 87.1417L102.494 65.1844C103.339 64.7416 104.316 64.6165 105.246 64.8319C106.175 65.0473 106.997 65.5889 107.562 66.3584C108.127 67.1279 108.397 68.0743 108.324 69.0261C108.251 69.9778 107.839 70.8717 107.163 71.5457L78.8922 99.8124L74.7258 120.054C74.5475 120.923 74.0847 121.708 73.4104 122.285C72.7361 122.861 71.8888 123.197 71.0024 123.238H70.8188V123.242Z"
              fill="#2033A0"
            />
          </svg>
        </div>
      </div>

      <div className="p-3 pt-4  w-[704px] border border-[#ECECEC] bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-syarpamainblue font-normal text-[20px]">
            Coin Updates
          </h3>
          <Input
            prefix={
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                  stroke="#8A90A8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            }
            placeholder="Search any coin"
          />
        </div>
        <div className="table-fixed w-full mt-10">
          {coinLists.map((item, idx) => (
            <div
              key={idx}
              className="border-b border-[#ECECEC] last:border-transparent flex items-center w-full pb-3 mb-3"
            >
              <div className="flex flex-1 gap-x-2 items-center">
                {item.icon}
                <div className="flex flex-col gap-y-1 ml-1">
                  <h3 className="text-black text-base font-cerebri">
                    {item.name}
                  </h3>
                  <h5 className="text-[14px] text-[#8A90A8]">{item.label}</h5>
                </div>
              </div>
              <div className="flex  flex-1">
                {item.priceDirection == "up" ? <UpGraph /> : <DownGraph />}
              </div>
              <div className="text-black flex  flex-1">$45,895</div>
              <div className=" items-center text-[#40BF6A] flex  flex-1">
                {item.percentage >= 1 ? <ArrowUp /> : <ArrowDown />}
                {item.percentage}%
              </div>
              <div>
                <div className="flex flex-1 border border-[#ECECEC]">
                  <div className="bg-[rgba(220, 223, 240, 0.3)] text-syarpamainblue w-[95.5px] h-[40px] p-[10px] text-center">
                    Buy
                  </div>
                  <div className="bg-white border border-[rgba(220, 223, 240, 0.3)] text-syarpamainblue w-[95.5px] h-[40px] p-[10px] text-center">
                    Sell
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WalletContainer />
      <div className="p-7 flex items-center justify-between w-[439px]  border border-[#DCDFF0]">
        <div className="gap-y-10">
          <h1 className="text-[20px] text-syarpamainblue font-normal mb-4">
            Receive crypto from your friend
          </h1>
          <h3 className="text-[18px] text-syarpasecondaryarsh">
            Send and receive crypto from your friends
          </h3>
        </div>
        <div>
          <svg
            width="91"
            height="91"
            viewBox="0 0 91 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="91"
              height="91"
              rx="45.5"
              fill="#00BAFF"
              fill-opacity="0.1"
            />
            <path
              d="M31.2833 31.2833H38.5848V27.6416H27.6416V38.5666H31.2833V31.2833ZM31.2833 53.1333H27.6416V64.0583H38.5848V60.4166H31.2833V53.1333ZM60.4166 60.4166H53.1333V64.0583H64.0583V53.1333H60.4166V60.4166ZM53.1333 31.2833H60.4166V38.5666H64.0583V27.6416H53.1333V31.2833Z"
              fill="#00BAFF"
            />
            <path
              d="M33.1042 44.0292H44.0292V33.1042H33.1042V44.0292ZM36.7459 36.7459H40.3876V40.3876H36.7459V36.7459ZM33.1042 58.5959H44.0292V47.6709H33.1042V58.5959ZM36.7459 51.3126H40.3876V54.9543H36.7459V51.3126ZM58.5959 33.1042H47.6709V44.0292H58.5959V33.1042ZM54.9542 40.3876H51.3126V36.7459H54.9542V40.3876ZM47.6891 47.6709H51.3308V51.3126H47.6891V47.6709ZM51.3308 51.3126H54.9725V54.9543H51.3308V51.3126ZM54.9725 54.9543H58.6141V58.5959H54.9725V54.9543ZM54.9725 47.6709H58.6141V51.3126H54.9725V47.6709Z"
              fill="#2033A0"
            />
          </svg>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
