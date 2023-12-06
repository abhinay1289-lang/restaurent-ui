import { useEffect, useState } from "react";
import Nonveg from "./Non-veg";
import Veg from "./Veg";
import { LookupTypes } from "../../common/lookuptypes";
import globalObject from "../../common/global-variables";

const FriedRice = (Props: any) => {
  const [nonVegCount, setNonVegCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  const [nonVegItems, setNonvegItems] = useState([] as any[]);
  const [vegItems, setVegItems] = useState([] as any[]);
  const [nonVegTotalCount, setNonvegTotalCount] = useState([] as any[]);
  const [vegTotalCount, setVegTotalCount] = useState([] as any[]);

  let riceCount = nonVegCount + vegCount;
  let riceItems = [...nonVegItems, ...vegItems];
  let riceItemCounts = [...nonVegTotalCount, ...vegTotalCount];

  const friedNonvegItems: any[] = globalObject.lookupvalues[
    LookupTypes.RICE
  ].filter((item: any) => item.type === 1);

  const friedVegItems: any[] = globalObject.lookupvalues[
    LookupTypes.RICE
  ].filter((item: any) => item.type === 2);

  useEffect(() => {
    Props.riceCount(riceCount);
    Props.riceItems(riceItems);
    Props.riceCountList(riceItemCounts);
  }, [riceCount]);

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
      <Nonveg
        items={friedNonvegItems}
        itemCount={(data: any) => setNonVegCount(data)}
        itemList={(data: any) => setNonvegItems(data)}
        counts={(data: any) => setNonvegTotalCount(data)}
      />
      <Veg
        items={friedVegItems}
        itemCount={(data: any) => setVegCount(data)}
        itemList={(data: any) => setVegItems(data)}
        counts={(data: any) => setVegTotalCount(data)}
      />
    </div>
  );
};
export default FriedRice;
