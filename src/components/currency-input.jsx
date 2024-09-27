import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight} from '@fortawesome/free-solid-svg-icons'

const CurrencyInput = ({ rates }) => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Function to calculate the converted amount
  useEffect(() => {
    if (fromCurrency && toCurrency && rates[fromCurrency] && rates[toCurrency]) {
      const rate = rates[toCurrency] / rates[fromCurrency];
      const output = setConvertedAmount((amount * rate).toFixed(2));} // Calculate conversion and round to 2 decimals
    }, [amount, fromCurrency, toCurrency, rates]);

 // Handle changes in the amount, fromCurrency, and toCurrency
 const handleAmountChange = (e) => {
  setAmount(e.target.value);
  convertCurrency(); // Recalculate conversion on amount change
};

const handleFromCurrencyChange = (e) => {
  setFromCurrency(e.target.value);
  convertCurrency(); // Recalculate conversion on currency change
};

const handleToCurrencyChange = (e) => {
  setToCurrency(e.target.value);
  convertCurrency(); // Recalculate conversion on currency change
};

  return (
    <div className="container">
    <div className="ConvertItens">
    <h1>Currency Converter </h1>
    <div className="amount">
        <label>Digit the amount</label> <br/>
        <input type="number" value={amount} onChange={handleAmountChange} min={1} step={0.01}/>
    </div>
    <div className="FromTo">
      <div className="From">
        <label className="Fromlabel">From</label>
      <select value={fromCurrency} onChange={handleFromCurrencyChange}>
      {Object.keys(rates).map((currency)=>(
        <option value={currency} key={currency}>
          {currency}
        </option>
      ))}
      </select>
 
      </div>
      <div className="IconArrow">
      <FontAwesomeIcon icon={faArrowsLeftRight} />
      </div>
      <div className="TO">
    <label  className="Tolabel">To</label>
    <select id="To" value={toCurrency} onChange={handleToCurrencyChange}>
    {Object.keys(rates).map((currency)=>(
      <option value={currency} key={currency}>
    {currency}
      </option>
    ))}
    </select>
    </div>
   </div> 
     <p className="converted">{amount} {fromCurrency} = {convertedAmount} {toCurrency}</p>
    </div>
    </div>
  )}

export default CurrencyInput


