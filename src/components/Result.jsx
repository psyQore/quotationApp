import React from "react";
import useQuotation from "../hooks/useQuotation";

const Result = () => {
  const { result } = useQuotation();

  if (result === 0) return null;
  
  return <div>{result}</div>;
};

export default Result;
