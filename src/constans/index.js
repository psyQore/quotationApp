export const BRANDS = [
  { id: 1, name: "Europeo" },
  { id: 2, name: "Americano" },
  { id: 3, name: "Asiatico" },
];

export const YEARMAX = new Date().getUTCFullYear();
export const YEARS = Array.from(
  new Array(20),
  (value, index) => YEARMAX - index
);

export const PLANS = [
  { id: 1, name: "Básico" },
  { id: 2, name: "Completo" },
];
