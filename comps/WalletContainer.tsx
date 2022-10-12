import React from "react";
import { syarpaBalance } from "../utils";
import Button from "./Button";
import WalletCard from "./WalletCard";

const WalletContainer = () => {
  return (
    <div className="w-[500px]">
      <div className="flex flex-col gap-y-4 mb-8">
        <h2 className="text-syarpamainblue">Wallet Balance</h2>
        <h3 className="text-syarpasecondaryarsh">
          Your total balance on syarpa
        </h3>
      </div>
      {syarpaBalance().map((balanceType, idx) => {
        return <WalletCard {...balanceType} key={idx} />;
      })}
      <div className="mt-5 mb-2 flex gap-x-2 w-[439px]  justify-between">
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
    </div>
  );
};

export default WalletContainer;
