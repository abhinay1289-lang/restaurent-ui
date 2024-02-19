import { useEffect } from "react";
import globalObject from "../../common/global-variables";
import {
  Box,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "../user-settings/userprofile.css";

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
      <div
        style={{
          width: "100vw",
          height: "90vh",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="pricing"
      >
        <div style={{ marginTop: "10px" }}>
          {/* <h3
            style={{
              textAlign: "center",
              color: "",
            }}
          >
            BIRYANI
          </h3> */}
          <div>
            <img
              src={require("../pricing/Biryani.avif")}
              alt="Peopletech-Group"
              height={150}
              width={240}
              style={{
                marginLeft: "20px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </div>
          <TableContainer sx={{ marginLeft: "28px" }}>
            <Table
              aria-label="simple table"
              sx={{ width: "100%", maxWidth: "550px" }}
            >
              {biryani.map((item) => (
                <TableRow>
                  <TableCell className="pricing-cell">{item.name}</TableCell>
                  <TableCell className="pricing-cell">{item.price}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
        <div style={{ marginTop: "10px" }}>
          <img
            src={require("../pricing/curry.avif")}
            alt="Peopletech-Group"
            height={150}
            width={240}
            style={{
              marginLeft: "20px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
          <TableContainer>
            <Table aria-label="simple table" sx={{ width: "90%" }}>
              {curries.map((item) => (
                <TableRow>
                  <TableCell className="pricing-cell">{item.name}</TableCell>
                  <TableCell className="pricing-cell">{item.price}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
        <div style={{ marginTop: "10px" }}>
          {/* <h3 style={{ textAlign: "center" }}>STARTERS</h3> */}
          <img
            src={require("../pricing/starters-1.avif")}
            alt="Peopletech-Group"
            height={150}
            width={240}
            style={{
              marginLeft: "20px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
          <TableContainer>
            <Table aria-label="simple table" sx={{ width: "90%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell className="price">PRICE</TableCell>
                </TableRow>
              </TableHead>
              {starters.map((item) => (
                <TableRow>
                  <TableCell className="pricing-cell">{item.name}</TableCell>
                  <TableCell className="pricing-cell">{item.price}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
        <div style={{ marginTop: "10px" }}>
          {/* <h3 style={{ textAlign: "center" }}>RICE</h3> */}
          <img
            src={require("../pricing/rice.avif")}
            alt="Peopletech-Group"
            height={150}
            width={240}
            style={{
              marginLeft: "20px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
          <TableContainer>
            <Table aria-label="simple table" sx={{ width: "90%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell className="price">PRICE</TableCell>
                </TableRow>
              </TableHead>
              {rice.map((item) => (
                <TableRow>
                  <TableCell className="pricing-cell">{item.name}</TableCell>
                  <TableCell className="pricing-cell">{item.price}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
        <div style={{ marginTop: "10px" }}>
          {/* <h3 style={{ textAlign: "center" }}>ROTIS</h3> */}
          <img
            src={require("../pricing/rotis.avif")}
            alt="Peopletech-Group"
            height={150}
            width={240}
            style={{
              marginLeft: "20px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
          <TableContainer>
            <Table aria-label="simple table" sx={{ width: "90%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell className="price">PRICE</TableCell>
                </TableRow>
              </TableHead>
              {rotis.map((item) => (
                <TableRow>
                  <TableCell className="pricing-cell">{item.name}</TableCell>
                  <TableCell className="pricing-cell">{item.price}</TableCell>
                </TableRow>
              ))}
            </Table>
          </TableContainer>
        </div>
        <div style={{ marginTop: "10px", marginRight: "20px" }}>
          {/* <h3 style={{ textAlign: "center" }}>DRINKS</h3> */}
          <img
            src={require("../pricing/drinks.avif")}
            alt="Peopletech-Group"
            height={150}
            width={240}
            style={{
              marginLeft: "20px",
              objectFit: "cover",
              borderRadius: "20px",
            }}
          />
          <TableContainer>
            <Table aria-label="simple table" sx={{ width: "90%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell className="price">PRICE</TableCell>
                </TableRow>
              </TableHead>
              {drinks.map((item) => (
                <TableRow>
                  <TableCell className="pricing-cell">{item.name}</TableCell>
                  <TableCell className="pricing-cell">{item.price}</TableCell>
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
