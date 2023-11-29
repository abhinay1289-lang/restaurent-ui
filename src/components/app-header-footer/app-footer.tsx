import { Button, Paper } from "@mui/material";
import "./responseapp.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useState } from "react";
const ResponseiveFooterBar = (Props: any) => {
  const totalItems: any[] = Props.totalItems;
  const totalItemCount: any[] = Props.totalItemCount;
  let price: any = 0;

  price = totalItems.map((item, index) => {
    return (
      price + totalItemCount.map((itemcount) => item.price * itemcount.count)
    );
  });
  console.log(Props.totalItems, Props.totalItemCount);

  return (
    <>
      <span>{JSON.stringify(Props.totalItems)}</span>
      {/* <span>{JSON.stringify(Props.totalcount)}</span> */}
      <span>{JSON.stringify(Props.totalItemCount)}</span>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Paper sx={{ backgroundColor: "#5de2e23d" }}>
          <h3 style={{ textAlign: "center" }}>PRICE DETAILS</h3>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <span>No of Items :</span>
              <span>{Props.totalcount}</span>
            </div>
            <div>
              <span>Total Price</span>
              <span>
                <CurrencyRupeeIcon fontSize="small" />
                <span>{price}</span>
              </span>
            </div>
          </div>

          <Button
            style={{
              borderRadius: "10px",
              padding: "3px",
              marginTop: "10px",
              backgroundColor: "lightgreen",
              color: "red",
            }}
          >
            BILL GENERATION
          </Button>
        </Paper>
      </div>
    </>
  );
};
export default ResponseiveFooterBar;
