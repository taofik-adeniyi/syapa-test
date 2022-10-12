import React from "react";
import {
  CryptoPlusIcon,
  QRCode,
  WalletPlusIcon,
  FiatPLusIcon,
} from "../assets/svg";
import Button from "./Button";
import WalletCard from "./WalletCard";

interface balanceType {
  balanceType: string;
  nairaValue: number;
  usdValue: number;
  icon: React.ReactNode;
}

const syarpaBalance: balanceType[] = [
  {
    balanceType: "wallet",
    nairaValue: 234784.0,
    usdValue: 45895,
    icon: <WalletPlusIcon />,
  },
  {
    balanceType: "crypto",
    nairaValue: 234784.0,
    usdValue: 45895,
    icon: <CryptoPlusIcon />,
  },
  {
    balanceType: "fiat",
    nairaValue: 234784.0,
    usdValue: 45895,
    icon: <FiatPLusIcon />,
  },
];
const WalletContainer = () => {
  return (
    <div className="w-full py-5 pr-5">
      <div className="flex flex-col gap-y-4 mb-8">
        <h2 className="text-syarpamainblue">Wallet Balance</h2>
        <h3 className="text-syarpasecondaryarsh font-normal text-[20px]">
          Your total balance on syarpa
        </h3>
      </div>
      {syarpaBalance.map((balanceType, idx) => {
        return <WalletCard {...balanceType} key={idx} />;
      })}
      <div className="mt-8 mb-4 flex gap-x-2 w-[439px]  justify-between">
        <Button
          type="button"
          variant="primary"
          className="w-6/12 bg-[#00BAFF] text-white"
        >
          Add Funds
        </Button>
        <Button
          type="button"
          variant="outline"
          className="w-6/12 bg-white border-2 border-[#DCDFF0] text-syarpamainblue"
        >
          Withdraw funds
        </Button>
      </div>
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
          <QRCode />
        </div>
      </div>
    </div>
  );
};

export default WalletContainer;
