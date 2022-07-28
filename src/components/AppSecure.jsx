import React from "react";
import Form from "./Form";
import useQuotation from "../hooks/useQuotation";

const AppSecure = () => {

  const { result } = useQuotation();

  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de Seguros
        </h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-xl p-10">
        <Form/>

        {result}
      </main>
    </>
  );
};

export default AppSecure;
