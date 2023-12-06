import { useEffect, useState } from "react";
import Nonveg from "./Non-veg";
import Veg from "./Veg";
import { LookupTypes } from "../../common/lookuptypes";
import globalObject from "../../common/global-variables";

const Starters = (Props: any) => {
  const [nonVegCount, setNonVegCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  const [nonVegItems, setNonvegItems] = useState([] as any[]);
  const [vegItems, setVegItems] = useState([] as any[]);
  const [nonVegTotalCount, setNonvegTotalCount] = useState([] as any[]);
  const [vegTotalCount, setVegTotalCount] = useState([] as any[]);
  let startersCount = nonVegCount + vegCount;
  let startersItems = [...nonVegItems, ...vegItems];
  let startersItemCounts = [...nonVegTotalCount, ...vegTotalCount];

  const startersNonvegItems: any[] = globalObject.lookupvalues[
    LookupTypes.STARTERS
  ].filter((item: any) => item.type === 1);

  const startersVegItems: any[] = globalObject.lookupvalues[
    LookupTypes.STARTERS
  ].filter((item: any) => item.type === 2);

  useEffect(() => {
    Props.startersCount(startersCount);
    Props.startersItems(startersItems);
    Props.startersCountList(startersItemCounts);
  }, [startersCount]);

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
        items={startersNonvegItems}
        itemCount={(data: any) => setNonVegCount(data)}
        itemList={(data: any) => setNonvegItems(data)}
        counts={(data: any) => setNonvegTotalCount(data)}
      />
      <Veg
        items={startersVegItems}
        itemCount={(data: any) => setVegCount(data)}
        itemList={(data: any) => setVegItems(data)}
        counts={(data: any) => setVegTotalCount(data)}
      />
    </div>
  );
};
export default Starters;
