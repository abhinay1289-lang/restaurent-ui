import { useEffect, useState } from "react";
import Nonveg from "./Non-veg";
import Veg from "./Veg";
import globalObject from "../../common/global-variables";
import { LookupTypes } from "../../common/lookuptypes";

const Drinks = (Props: any) => {
  const [nonVegCount, setNonVegCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  let drinksCount = nonVegCount + vegCount;

  const drinkItems: any[] = globalObject.lookupvalues[LookupTypes.DRINKS];

  const updateNonVegCount = (data: any) => {
    setNonVegCount(data);
  };
  const updateVegCount = (data: any) => {
    setVegCount(data);
  };
  useEffect(() => {
    Props.drinksCount(drinksCount);
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
      <Nonveg items={drinkItems} itemCount={updateNonVegCount} />
      <Veg items={drinkItems} itemCount={updateVegCount} />
    </div>
  );
};
export default Drinks;
