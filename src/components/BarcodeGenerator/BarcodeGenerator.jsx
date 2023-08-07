import React, {useState} from "react";
import Barcode from "react-barcode";
import * as uuid from "uuid";
const BarcodeGenerator = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((prevState) => !prevState)}>
        Generate barcode
      </button>
      {show && <Barcode value={`${uuid.v4().substring(0, 13)}`} />}
    </>
  );
};

export default BarcodeGenerator;
