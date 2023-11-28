import { useEffect, useState } from "react";
import Nonveg from "./Non-veg";
import Veg from "./Veg";
import globalObject from "../../common/global-variables";
import { LookupTypes } from "../../common/lookuptypes";

const Curries = (Props: any) => {
  const [nonVegCount, setNonVegCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  const [nonVegItems, setNonvegItems] = useState([] as any[]);
  const [vegItems, setVegItems] = useState([] as any[]);
  const [nonVegTotalCount, setNonvegTotalCount] = useState([] as any[]);
  const [vegTotalCount, setVegTotalCount] = useState([] as any[]);

  let curriesCount = nonVegCount + vegCount;
  let curryItems = [...nonVegItems, ...vegItems];
  let curryItemCounts = [...nonVegTotalCount, ...vegTotalCount];

  const curriesNonvegItems: any[] = globalObject.lookupvalues[
    LookupTypes.CURRIES
  ].filter((item: any) => item.type === 1);

  const curriesVegItems: any[] = globalObject.lookupvalues[
    LookupTypes.CURRIES
  ].filter((item: any) => item.type === 2);

  useEffect(() => {
    Props.curryCount(curriesCount);
    Props.curryItems(curryItems);
    Props.curryCountList(curryItemCounts);
  }, [curriesCount]);

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
        items={curriesNonvegItems}
        itemCount={(data: any) => setNonVegCount(data)}
        itemList={(data: any) => setNonvegItems(data)}
        counts={(data: any) => setNonvegTotalCount(data)}
      />
      <Veg
        items={curriesVegItems}
        itemCount={(data: any) => setVegCount(data)}
        itemList={(data: any) => setVegItems(data)}
        counts={(data: any) => setVegTotalCount(data)}
      />
    </div>
  );
};
export default Curries;
