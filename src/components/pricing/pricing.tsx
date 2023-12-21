import { useEffect } from "react";
import globalObject from "../../common/global-variables";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./pricing.css";

const Pricing = () => {
  const biryani: any[] = globalObject.lookupvalues["biryani"];
  const curries: any[] = globalObject.lookupvalues["curries"];
  const starters: any[] = globalObject.lookupvalues["starters"];
  const rice: any[] = globalObject.lookupvalues["rice"];
  const rotis: any[] = globalObject.lookupvalues["rotis"];
  const drinks: any[] = globalObject.lookupvalues["drinks"];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let lookupvalues;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    lookupvalues = globalObject.lookupvalues;
  });

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <div className="pricing">
          <h3 style={{ textAlign: "center" }}>BIRYANI</h3>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{ width: "90%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell className="price">PRICE</TableCell>
                </TableRow>
              </TableHead>
              {biryani.map((item) => (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="price">{item.price}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
        <div className="pricing">
          <h3 style={{ textAlign: "center" }}>CURRIES</h3>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{ width: "90%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell className="price">PRICE</TableCell>
                </TableRow>
              </TableHead>
              {curries.map((item) => (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="price">{item.price}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
        <div className="pricing">
          <h3 style={{ textAlign: "center" }}>STARTERS</h3>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{ width: "90%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell className="price">PRICE</TableCell>
                </TableRow>
              </TableHead>
              {starters.map((item) => (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="price">{item.price}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
        <div className="pricing">
          <h3 style={{ textAlign: "center" }}>RICE</h3>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{ width: "90%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell className="price">PRICE</TableCell>
                </TableRow>
              </TableHead>
              {rice.map((item) => (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="price">{item.price}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
        <div className="pricing">
          <h3 style={{ textAlign: "center" }}>ROTIS</h3>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{ width: "90%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell className="price">PRICE</TableCell>
                </TableRow>
              </TableHead>
              {rotis.map((item) => (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="price">{item.price}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
        <div className="pricing">
          <h3 style={{ textAlign: "center" }}>DRINKS</h3>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{ width: "90%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell className="price">PRICE</TableCell>
                </TableRow>
              </TableHead>
              {drinks.map((item) => (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell className="price">{item.price}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};
export default Pricing;
