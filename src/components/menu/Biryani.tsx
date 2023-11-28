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

  const biryaniNonvegItems: any[] = globalObject.lookupvalues[
    LookupTypes.BIRYANI
  ].filter((item: any) => item.type === 1);

  const biryaniVegItems: any[] = globalObject.lookupvalues[
    LookupTypes.BIRYANI
  ].filter((item: any) => item.type === 2);

  useEffect(() => {
    Props.biryaniCount(biryaniCount);
    Props.biryaniItems(biryaniItems);
    Props.biryaniCountList(biryaniItemCounts);
  }, [biryaniCount]);
  return (
    <>
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
          items={biryaniNonvegItems}
          itemCount={(data: any) => setNonVegCount(data)}
          itemList={(data: any) => setNonvegItems(data)}
          counts={(data: any) => setNonvegTotalCount(data)}
        />
        <Veg
          items={biryaniVegItems}
          itemCount={(data: any) => setVegCount(data)}
          itemList={(data: any) => setVegItems(data)}
          counts={(data: any) => setVegTotalCount(data)}
        />
      </div>
    </>
  );
};
export default Biryani;
