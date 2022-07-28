import { useState, createContext } from "react";
import { makeTheDifferenceYear } from "../helpers";

const QuotationContext = createContext();

const QuotationProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");

  // Leer inputs
  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // Cotizar Seguro
  const quoteInsurance = () => {
    // Base
    let result = 2000;

    // Diferencia de años
    const difference = makeTheDifferenceYear(data.year);

    console.log(difference);

    // Hay que restar el 3% por año
    result -= (difference * 3 * result) / 100;
    console.log(result);

    // Americano 15%
    // Europeo 30%
    // Asiatico 5%

    // Basico 20%
    // Completo 50%
  };

  return (
    <QuotationContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        quoteInsurance,
      }}
    >
      {children}
    </QuotationContext.Provider>
  );
};

export { QuotationProvider };

export default QuotationContext;
