import { createContext } from "react";

const QuotationContext = createContext();

const QuotationProvider = ({ children }) => {

    return(
        <QuotationContext.Provider 
        value={{}}
        >
            {children}
        </QuotationContext.Provider>
    )
}

export {
    QuotationProvider
}

export default QuotationContext