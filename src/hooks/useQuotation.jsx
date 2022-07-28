import { useContext } from 'react';
import QuotationContext from '../context/QuotationProvider';

const useQuotation = () => {   
    return useContext(QuotationContext);
    
}

export default useQuotation