import { useEffect, useState } from "react";
import Nonveg from "./Non-veg";
import Veg from "./Veg";
import { LookupTypes } from "../../common/lookuptypes";
import globalObject from "../../common/global-variables";

const Rice = (Props: any) => {
  const [nonVegCount, setNonVegCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  let riceCount = nonVegCount + vegCount;

  const riceNonvegItems: any[] = globalObject.lookupvalues[
    LookupTypes.RICE
  ].filter((item: any) => item.type === 1);

  const riceVegItems: any[] = globalObject.lookupvalues[
    LookupTypes.RICE
  ].filter((item: any) => item.type === 2);

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
      <Nonveg items={riceNonvegItems} itemCount={updateNonVegCount} />
      <Veg items={riceVegItems} itemCount={updateVegCount} />
    </div>
  );
};
export default Rice;
