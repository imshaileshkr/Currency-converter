import { useEffect, useState } from "react";

function userCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        console.table(data);
        setCurrencyInfo(data[currency])});

  }, [currency]);
  console.log(currencyInfo);
  return currencyInfo
}
export default userCurrencyInfo;