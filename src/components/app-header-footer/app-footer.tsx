import { Button, Paper } from "@mui/material";
import "./responseapp.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const ResponseiveFooterBar = (Props: any) => {
  const totalItems: any[] = Props.totalItems;
  const totalItemCount: any[] = Props.totalItemCount;
  const result: number[] = [];

  for (let i = 0; i < totalItems.length; i++) {
    const totalPrice = totalItems[i].price || 0;
    const itemCount = totalItemCount[i].count || 0;

    const product = totalPrice * itemCount;
    result.push(product);
  }
  const totalSum = result.reduce((sum, value) => sum + value, 0);

  return (
    <>
      <span>{JSON.stringify(totalItems)}</span>
      <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
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
                <span>{totalSum}</span>
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
