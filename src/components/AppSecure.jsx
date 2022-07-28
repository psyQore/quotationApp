import React from "react";
import Form from "./Form";

const AppSecure = () => {
  return (
    <>
      <header className="my-10">
        <h1 className="text-white text-center text-4xl font-black">
          Cotizador de Seguros
        </h1>
      </header>
      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-xl p-10">
        <Form/>
      </main>
    </>
  );
};

export default AppSecure;
