import { useEffect, useState } from "react";
import Nonveg from "./Non-veg";
import Veg from "./Veg";
import { LookupTypes } from "../../common/lookuptypes";
import globalObject from "../../common/global-variables";

const FriedRice = (Props: any) => {
  const [nonVegCount, setNonVegCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  let friedRiceCount = nonVegCount + vegCount;

  const friedNonvegItems: any[] = globalObject.lookupvalues[
    LookupTypes.FRIEDRICE_NOODLES
  ].filter((item: any) => item.type === 1);

  const friedVegItems: any[] = globalObject.lookupvalues[
    LookupTypes.FRIEDRICE_NOODLES
  ].filter((item: any) => item.type === 2);

  const updateNonVegCount = (data: any) => {
    setNonVegCount(data);
  };
  const updateVegCount = (data: any) => {
    setVegCount(data);
  };
  useEffect(() => {
    Props.friedRiceCount(friedRiceCount);
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
      <Nonveg items={friedNonvegItems} itemCount={updateNonVegCount} />
      <Veg items={friedVegItems} itemCount={updateVegCount} />
    </div>
  );
};
export default FriedRice;
