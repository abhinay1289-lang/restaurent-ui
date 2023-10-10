import Nonveg from "./Non-veg";
import Veg from "./Veg";

const Curries = () => {
  const biryaniItems: string[] = [
    "djygfhdrtksrje",
    "kwhedwe",
    "kshhrdtreifwe",
    "jhaekgwd",
    "jhawguhe3",
  ];

  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        marginTop: "10%",
      }}
    >
      <Nonveg items={biryaniItems} />
      <Veg items={biryaniItems} />
    </div>
  );
};
export default Curries;
