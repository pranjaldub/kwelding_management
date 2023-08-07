import React from "react";
import Barcode from "react-barcode";
import * as uuid from "uuid";
const BarcodeGenerator = () => {
  return <Barcode value={`${uuid.v4().substring(0, 13)}`} />;
};

export default BarcodeGenerator;
