import { QuotationProvider } from "./context/QuotationProvider";
import AppSecure from "./components/AppSecure";

function App() {
  return (
    <QuotationProvider>
      <AppSecure />
    </QuotationProvider>
  );
}

export default App;
