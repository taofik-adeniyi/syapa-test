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
  PaperPlane,
  SearchIcon,
} from "../assets/svg";
import Button from "../comps/Button";
import CoinItem from "../comps/CoinItem";
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
      <Header pageName="Dashboard" />

      <div className="bg-white body-h w-[85%] pb-2 flex flex-col md:flex-row ml-auto">
        <div className="w-[63%] p-5">
          <div className="send-naira-card bg-white flex pb-8 justify-between items-end w-full h-[254px] mb-5">
            <div className="flex flex-col gap-y-3 w-[70%]">
              <h1 className="text-[30px] text-syarpamainblue font-cerebri font-semibold">
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
              <div className="cursor-pointer">
                <PaperPlane />
              </div>
            </div>
          </div>
          <div className="p-3 pt-4 w-full border border-[#ECECEC] bg-white">
            <div className="flex justify-between items-center">
              <h3 className="text-syarpamainblue font-normal text-[18px]">
                Coin Updates
              </h3>
              <Input prefix={<SearchIcon />} placeholder="Search any coin" />
            </div>
            <div className="table-fixed w-full mt-10">
              {coinLists.map((item, idx) => (
                <CoinItem key={idx} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-[37%]">
          <WalletContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
