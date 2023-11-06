import { useEffect, useState } from "react";
import "./menu.css";
import Nonveg from "./Non-veg";
import Veg from "./Veg";
import globalObject from "../../common/global-variables";
import { LookupTypes } from "../../common/lookuptypes";

const Biryani = (Props: any) => {
  const [nonVegCount, setNonVegCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  let biryaniCount = nonVegCount + vegCount;

  const biryaniNonvegItems: any[] = globalObject.lookupvalues[
    LookupTypes.BIRYANI
  ].filter((item: any) => item.type === 1);

  const biryaniVegItems: any[] = globalObject.lookupvalues[
    LookupTypes.BIRYANI
  ].filter((item: any) => item.type === 2);

  const updateNonVegCount = (data: any) => {
    setNonVegCount(data);
  };
  const updateVegCount = (data: any) => {
    setVegCount(data);
  };
  useEffect(() => {
    Props.biryaniCount(biryaniCount);
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
      <Nonveg items={biryaniNonvegItems} itemCount={updateNonVegCount} />
      <Veg items={biryaniVegItems} itemCount={updateVegCount} />
    </div>
  );
};
export default Biryani;
