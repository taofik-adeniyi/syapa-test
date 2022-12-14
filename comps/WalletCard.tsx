import React from "react";
import commaNumber from "comma-number";

const WalletCard = (props: any) => {
  const { balanceType, nairaValue, usdValue, icon } = props;
  const balanceTypeClass =
    balanceType == "wallet"
      ? "wallet"
      : balanceType == "crypto"
      ? "crypto"
      : "fiat";

  return (
    <div
      className={`flex items-center py-[15px] w-full md:w-[439px] min-h-[100px] px-[30px] ${balanceTypeClass}`}
    >
      <div className="flex flex-1 flex-col">
        {balanceType && (
          <h3 className="font-normal text-[11px] leading-[14px]">
            Total <span className="capitalize">{balanceType}</span> Balance
          </h3>
        )}
        {nairaValue && (
          <h1 className="text-[32px] font-semibold leading-10">
            ₦ {commaNumber(nairaValue)}
          </h1>
        )}
        {usdValue && <small>${commaNumber(usdValue)}</small>}
      </div>
      {icon}
    </div>
  );
};

export default WalletCard;
