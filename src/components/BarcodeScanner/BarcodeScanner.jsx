import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

function BarcodeScanner() {
  const [data, setData] = React.useState("Not Found");
  const [show, setShow] = React.useState(false);
  const [torchOn, setTorchOn] = React.useState(false);

  return (
    <>
      <button onClick={() => setShow((prevState) => !prevState)}>open</button>
      {show && (
        <BarcodeScannerComponent
          width={500}
          height={500}
          torch={torchOn}
          onUpdate={(err, result) => {
            if (result) setData(result.text);
            else setData("Not Found");
          }}
        />
      )}
      <p>{data}</p>
      <button onClick={() => setTorchOn(!torchOn)}>
        Switch Torch {torchOn ? "Off" : "On"}
      </button>
      <button>Submit Code : {data}</button>
    </>
  );
}

export default BarcodeScanner;
