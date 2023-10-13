import { useEffect, useState } from "react";
import "./menu.css";
import Nonveg from "./Non-veg";
import Veg from "./Veg";

const Biryani = (Props: any) => {
  const [nonVegCount, setNonVegCount] = useState(0);
  const [vegCount, setVegCount] = useState(0);
  let biryaniCount = nonVegCount + vegCount;
  const biryaniItems: string[] = [
    "djygfhdrtksrje",
    "kwhedwe",
    "kshhrdtreifwe",
    "jhaekgwd",
    "jhawguhe3",
  ];
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
      <Nonveg items={biryaniItems} itemCount={updateNonVegCount} />
      <Veg items={biryaniItems} itemCount={updateVegCount} />
    </div>
  );
};
export default Biryani;
