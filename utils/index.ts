import { BTCImage } from "../assets/svg"
interface balanceType {
  balanceType: string;
  nairaValue: string;
  usdValue: string;
}

export const syarpaBalance = () => {
  return [
    {
      balanceType: "wallet",
      nairaValue: 234784.0,
      usdValue: 45895,
    },
    {
      balanceType: "crypto",
      nairaValue: 234784.0,
      usdValue: 45895,
    },
    {
      balanceType: "fiat",
      nairaValue: 234784.0,
      usdValue: 45895,
    },
  ];
};

