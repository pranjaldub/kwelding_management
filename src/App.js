import logo from "./logo.svg";
import "./App.css";
import BarcodeGenerator from "./components/BarcodeGenerator/BarcodeGenerator";
import BarcodeScanner from "./components/BarcodeScanner/BarcodeScanner";

function App() {
  return (
    <div className="App">
      <BarcodeGenerator />
      <BarcodeScanner />
    </div>
  );
}

export default App;
