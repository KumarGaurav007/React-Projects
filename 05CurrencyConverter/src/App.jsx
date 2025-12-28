import { useState } from 'react'
import './App.css'
import InputBox from './assets/components/InputBox'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  let currencyInfo = useCurrencyinfo(from)

  let options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])

  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/6771740/pexels-photo-6771740.jpeg')`,
      }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/50 to-black/30"></div>

      <div className="w-full">
        <div className="w-full max-w-xl mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <h1 className='text-center text-5xl text-green-600 mb-5 text-shadow-white text-shadow-md font-bold underline pb-5 '>Currency Convertor</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="cursor-pointer absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-green-600 text-white px-2 py-0.5"
                onClick={swap}

              >
                swap ⇄
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable

              />
            </div>
            <button type="submit" className="cursor-pointer w-full bg-green-700 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
