import { useEffect, useState } from "react";
import "./menu.css";
import Nonveg from "./Non-veg";
import Veg from "./Veg";
import globalObject from "../../common/global-variables";
import { LookupTypes } from "../../common/lookuptypes";

const Biryani = (Props: any) => {
  const [nonVegCount, setNonVegCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  const [nonVegItems, setNonvegItems] = useState([] as any[]);
  const [vegItems, setVegItems] = useState([] as any[]);
  const [nonVegTotalCount, setNonvegTotalCount] = useState([] as any[]);
  const [vegTotalCount, setVegTotalCount] = useState([] as any[]);
  let biryaniCount = nonVegCount + vegCount;
  let biryaniItems = [...nonVegItems, ...vegItems];
  let biryaniItemCounts = [...nonVegTotalCount, ...vegTotalCount];

  const handleNonVegCounts = (data: any[]) => {
    setNonvegTotalCount(data);
  };
  const handleVegCounts = (data: any[]) => {
    setVegTotalCount(data);
  };

  const handleNonvegBiryaniItems = (data: any[]) => {
    setNonvegItems(data);
  };
  const handleVegBiryaniItems = (data: any) => {
    setVegItems(data);
  };
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
    Props.biryaniItems(biryaniItems);
  }, [biryaniCount]);
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
      {/* <span>{JSON.stringify(biryaniItems)}</span>
      <span>{JSON.stringify(biryaniItemCounts)}</span> */}
      <Nonveg
        items={biryaniNonvegItems}
        itemCount={updateNonVegCount}
        itemList={handleNonvegBiryaniItems}
        counts={handleNonVegCounts}
      />
      <Veg
        items={biryaniVegItems}
        itemCount={updateVegCount}
        itemList={handleVegBiryaniItems}
        counts={handleVegCounts}
      />
    </div>
  );
};
export default Biryani;
