import { useState, createContext } from "react";

const QuotationContext = createContext();

const QuotationProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <QuotationContext.Provider value={{ data, handleChangeData }}>
      {children}
    </QuotationContext.Provider>
  );
};

export { QuotationProvider };

export default QuotationContext;
