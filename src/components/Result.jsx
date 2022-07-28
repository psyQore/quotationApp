import React from "react";
import useQuotation from "../hooks/useQuotation";
import { BRANDS, PLANS } from "../constans";

const Result = () => {
  const { result, data } = useQuotation();
  const { brand, year, plan } = data;

  const [nameBrand] = BRANDS.filter((m) => m.id === Number(brand));
  const [namePlan] = PLANS.filter((p) => p.id === Number(plan));

  console.log(namePlan);

  if (result === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-700 font-black text-3xl">Resumen</h2>
      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nameBrand.name}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {namePlan.name}
      </p>

      <p className="my-2">
        <span className="font-bold">Año del Auto: </span>
        {year}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        {result}
      </p>
    </div>
  );
};

export default Result;
