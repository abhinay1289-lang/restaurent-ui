import { useEffect, useState } from "react";
import Nonveg from "./Non-veg";
import Veg from "./Veg";
import { LookupTypes } from "../../common/lookuptypes";
import globalObject from "../../common/global-variables";

const Rice = (Props: any) => {
  const [nonVegCount, setNonVegCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  let riceCount = nonVegCount + vegCount;

  const riceItems: any[] = globalObject.lookupvalues[LookupTypes.RICE];

  const updateNonVegCount = (data: any) => {
    setNonVegCount(data);
  };
  const updateVegCount = (data: any) => {
    setVegCount(data);
  };
  useEffect(() => {
    Props.riceCount(riceCount);
  });

  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        marginTop: "10%",
      }}
    >
      <Nonveg items={riceItems} itemCount={updateNonVegCount} />
      <Veg items={riceItems} itemCount={updateVegCount} />
    </div>
  );
};
export default Rice;
