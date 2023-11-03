import { useEffect, useState } from "react";
import Nonveg from "./Non-veg";
import Veg from "./Veg";
import { LookupTypes } from "../../common/lookuptypes";
import globalObject from "../../common/global-variables";

const FriedRice = (Props: any) => {
  const [nonVegCount, setNonVegCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  let friedRiceCount = nonVegCount + vegCount;

  const chineseItems: any[] =
    globalObject.lookupvalues[LookupTypes.FRIEDRICE_NOODLES];

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
      <Nonveg items={chineseItems} itemCount={updateNonVegCount} />
      <Veg items={chineseItems} itemCount={updateVegCount} />
    </div>
  );
};
export default FriedRice;
