import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import "./menu.css";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Biryani = () => {
  let [count, setCount] = useState(0);

  const biryaniItems: String[] = [
    "djygfhdrtksrje",
    "kwhedwe",
    "kshhrdtreifwe",
    "jhaekgwd",
    "jhawguhe3",
  ];
  const increment = () => {
    setCount(++count);
  };
  const decrement = () => {
    setCount(--count);
  };
  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "space-evenly",
      }}
    >
      <div className="items">
        <h3 style={{ textAlign: "center", marginRight: "30px" }}>NON VEG</h3>
        <div>
          {/* {biryaniItems.map((item) => (
            <Box
              sx={{
                height: "80px",
                border: "groove",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Checkbox />
              <span>{item}</span>
              <div
                style={{
                  display: "flex",
                  border: "groove",
                  justifyContent: "inherit",
                  width: "40px",
                }}
              >
                <span className="span" onClick={decrement}>
                  {" "}
                  -{" "}
                </span>
                <span>{count}</span>
                <span className="span" onClick={increment}>
                  {" "}
                  +{" "}
                </span>
              </div>
            </Box>
          ))} */}
          <ul style={{ display: "flex" }}>
            {biryaniItems.map((item, i) => (
              <li key={i} style={{ display: "flex" }} className="list">
                <div>
                  <section className="section">
                    <span className="mui-box">
                      <Checkbox checked={count !== 0 ? true : false} />
                    </span>
                    <span>{item}</span>
                    <span className="mui-buttons">
                      <Button className="addicon">
                        <span className="mui-label-2">
                          <RemoveIcon />
                        </span>
                      </Button>
                      <input type="text" className="mui-text" value={count} />

                      <Button className="addicon" onClick={increment}>
                        <span className="mui-label-1">
                          <AddIcon />
                        </span>
                      </Button>
                    </span>
                  </section>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="items">
        <h3 style={{ textAlign: "center" }}>NON VEG</h3>
        <div>
          {biryaniItems.map((item) => (
            <h4>{item}</h4>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Biryani;
