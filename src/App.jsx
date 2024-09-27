import CurrencyInput from "./components/currency-input";
import React, { useState, useEffect } from "react";

function App() {
  const [rates, setRates] = useState({});
  const [isRatesFetched, setIsRatesFetched] = useState(false);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://v6.exchangerate-api.com/v6/0b2087b28368a1ea204858c6/latest/USD"
        );
        const data = await response.json();
        if (data.result === "success") {
          setRates(data.conversion_rates);
          setIsRatesFetched(true);
        }
      } catch (error) {
        console.error("Error fetching rates:", error);
      }
    };
    fetchRates();
  }, []);

  return (
    <>
      {isRatesFetched ? (
        <CurrencyInput rates={rates} />
      ) : (
        <p>Loading currency rates...</p>
      )}
    </>
  );
}

export default App;
