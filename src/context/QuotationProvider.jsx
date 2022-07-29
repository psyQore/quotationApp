import { useState, createContext } from "react";
import {
  makeTheDifferenceYear,
  calculateBrand,
  calculatePlan,
  formatMoney,
} from "../helpers";

const QuotationContext = createContext();

const QuotationProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);

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

    // Hay que restar el 3% por año
    result -= (difference * 3 * result) / 100;

    // Americano 15%, Europeo 30%, Asiatico 5%
    result *= calculateBrand(data.brand);

    // Basico 20%, Completo 50%
    result *= calculatePlan(data.plan);

    // Formatear Dinero
    result = formatMoney(result);

    setLoading(true);

    setTimeout(() => {
      setResult(result);
      setLoading(false);
    }, 2000);
  };

  return (
    <QuotationContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        quoteInsurance,
        result,
        loading,
      }}
    >
      {children}
    </QuotationContext.Provider>
  );
};

export { QuotationProvider };

export default QuotationContext;
