import { useState } from "react";
import "./menu.css";
import Nonveg from "./Non-veg";
import Veg from "./Veg";

const Biryani = () => {
  const [count, setCount] = useState(0);
  const biryaniItems: string[] = [
    "djygfhdrtksrje",
    "kwhedwe",
    "kshhrdtreifwe",
    "jhaekgwd",
    "jhawguhe3",
  ];
  const updateCount = (data: any) => {
    setCount(data);
  };
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
      <span>{JSON.stringify(count)}</span>
      <Nonveg items={biryaniItems} itemCount={updateCount} />
      <Veg items={biryaniItems} itemCount={updateCount} />
    </div>
  );
};
export default Biryani;
