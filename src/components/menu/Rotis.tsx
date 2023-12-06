import { useEffect, useState } from "react";
import Veg from "./Veg";
import { LookupTypes } from "../../common/lookuptypes";
import globalObject from "../../common/global-variables";

const Rotis = (Props: any) => {
  const [vegCount, setVegCount] = useState(0);
  const [vegItems, setVegItems] = useState([] as any[]);
  const [vegTotalCount, setVegTotalCount] = useState([] as any[]);

  let curryItems = [...vegItems];
  let curryItemCounts = [...vegTotalCount];

  const rotisVegItems: any[] = globalObject.lookupvalues[
    LookupTypes.ROTIS
  ].filter((item: any) => item.type === 2);

  useEffect(() => {
    Props.rotisCount(vegCount);
    Props.rotisItems(curryItems);
    Props.rotisCountList(curryItemCounts);
  }, [vegCount]);

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
      <Veg
        items={rotisVegItems}
        itemCount={(data: any) => setVegCount(data)}
        itemList={(data: any) => setVegItems(data)}
        counts={(data: any) => setVegTotalCount(data)}
      />
    </div>
  );
};
export default Rotis;
