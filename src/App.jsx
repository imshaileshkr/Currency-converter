import userCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const currencyInfo = userCurrencyInfo('inr');

  return (
    <>
    <h1 className="text-bold">Currency Converter</h1>
    <p>
      {/* {currencyInfo} */}
    </p>
    </>
  )
}

export default App
