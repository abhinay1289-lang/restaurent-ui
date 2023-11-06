import { useEffect, useState } from "react";
import Nonveg from "./Non-veg";
import Veg from "./Veg";
import { LookupTypes } from "../../common/lookuptypes";
import globalObject from "../../common/global-variables";

const Rotis = (Props: any) => {
  const [nonVegCount, setNonVegCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  let rotisCount = nonVegCount + vegCount;

  const rotisNonvegItems: any[] = globalObject.lookupvalues[
    LookupTypes.ROTIS
  ].filter((item: any) => item.type === 1);

  const rotisVegItems: any[] = globalObject.lookupvalues[
    LookupTypes.ROTIS
  ].filter((item: any) => item.type === 2);

  const updateNonVegCount = (data: any) => {
    setNonVegCount(data);
  };
  const updateVegCount = (data: any) => {
    setVegCount(data);
  };
  useEffect(() => {
    Props.rotisCount(rotisCount);
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
      <Nonveg items={rotisNonvegItems} itemCount={updateNonVegCount} />
      <Veg items={rotisVegItems} itemCount={updateVegCount} />
    </div>
  );
};
export default Rotis;
