import React from "react";

const WalletCard = (props: any) => {
  const { balanceType, nairaValue, usdValue } = props;
  const balanceTypeClass =
    balanceType == "wallet"
      ? "wallet"
      : balanceType == "crypto"
      ? "crypto"
      : "fiat";

  return (
    <div
      className={`flex items-center py-[15px] w-[439px] min-h-[100px] px-[30px] ${balanceTypeClass}`}
    >
      <div className="flex flex-1 flex-col">
        {balanceType && (
          <h3 className="font-normal text-[11px] leading-[14px]">
            Total {balanceType} Balance
          </h3>
        )}
        {nairaValue && (
          <h1 className="text-[32px] font-semibold leading-10">
            ₦ {nairaValue}
          </h1>
        )}
        {usdValue && <small>${usdValue}</small>}
      </div>
      <div
        id="arrow"
        className="w-[38px] h-[38px] opacity-10 rounded-full bg-inherit"
      ></div>
    </div>
  );
};

export default WalletCard;
