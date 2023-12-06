import { useEffect, useState } from "react";
import Veg from "./Veg";
import globalObject from "../../common/global-variables";
import { LookupTypes } from "../../common/lookuptypes";

const Drinks = (Props: any) => {
  const [vegCount, setVegCount] = useState(0);
  const [vegItems, setVegItems] = useState([] as any[]);
  const [vegTotalCount, setVegTotalCount] = useState([] as any[]);

  let drinksCount = vegCount;
  let drinkItems = [...vegItems];
  let drinkItemCounts = [...vegTotalCount];

  const drinksVegItems: any[] = globalObject.lookupvalues[
    LookupTypes.DRINKS
  ].filter((item: any) => item.type === 2);

  useEffect(() => {
    Props.drinksCount(drinksCount);
    Props.drinksItems(drinkItems);
    Props.drinksCountList(drinkItemCounts);
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
      <Veg
        items={drinksVegItems}
        itemCount={(data: any) => setVegCount(data)}
        itemList={(data: any) => setVegItems(data)}
        counts={(data: any) => setVegTotalCount(data)}
      />
    </div>
  );
};
export default Drinks;
