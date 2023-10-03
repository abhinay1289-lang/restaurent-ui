import {
  Box,
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
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
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
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "lightgrey" }}>
            {biryaniItems.map((value, i) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem
                  key={i}
                  secondaryAction={
                    <IconButton>
                      {count === 0 ? (
                        <AddCircleOutlineIcon onClick={increment} />
                      ) : (
                        count
                      )}
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton
                    role={undefined}
                    // onClick={handleToggle(value)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        // checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={value} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
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
