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
import { SlowBuffer } from "buffer";

const Biryani = () => {
  let [count, setCount] = useState(0);
  const [disabled, setdisabled] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const biryaniItems: String[] = [
    "djygfhdrtksrje",
    "kwhedwe",
    "kshhrdtreifwe",
    "jhaekgwd",
    "jhawguhe3",
  ];
  const [counts, setCounts] = useState(new Array(biryaniItems.length).fill(0));
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
    console.log("value", value, "   count", count);
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const display = (value: any) => {
    console.log(value);
    setSelectedItem(value);
  };

  const increment = (index: any) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
    console.log(newCounts);
    setdisabled(false);
  };

  const decrement = (index: any) => {
    const newCounts = [...counts];
    newCounts[index]--;
    setCounts(newCounts);
    console.log(newCounts);
    if (newCounts[index] <= 0) setdisabled(true);
  };

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
      <div className="items">
        <h3
          style={{
            textAlign: "center",
            backgroundColor: "#ff00005c",
            margin: "0 0 0 0",
          }}
        >
          NON VEG
        </h3>
        <div>
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "transparent" }}>
            {biryaniItems.map((value, i) => (
              <ListItem
                className="itemsbox"
                key={i}
                secondaryAction={
                  <div className="mui-buttons">
                    <Button
                      key={i}
                      sx={{ padding: "0 0 0 0" }}
                      disabled={disabled}
                      onClick={() => decrement(i)}
                    >
                      <span className="mui-label-2">
                        <RemoveIcon />
                      </span>
                    </Button>

                    <input
                      key={i}
                      type="text"
                      className="mui-text"
                      value={counts[i]}
                      readOnly
                    />

                    <Button
                      sx={{ padding: "0 0 0 0" }}
                      key={i}
                      onClick={() => increment(i)}
                    >
                      <span className="mui-label-1">
                        <AddIcon />
                      </span>
                    </Button>
                  </div>
                }
                disablePadding
              >
                <ListItemButton
                  className="itemsbutton"
                  role={undefined}
                  onClick={handleToggle(i)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(i) !== -1}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText primary={value} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>

      <div className="items">
        <h3
          style={{
            textAlign: "center",
            margin: "0 0 0 0",
            backgroundColor: "#00800059",
          }}
        >
          VEG
        </h3>
        <div>
          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "transparent" }}>
            {biryaniItems.map((value, i) => (
              <ListItem
                className="itemsbox"
                key={i}
                secondaryAction={
                  <div className="mui-buttons">
                    <Button
                      key={i}
                      sx={{ padding: "0 0 0 0" }}
                      disabled={disabled}
                      onClick={handleToggle(i)}
                    >
                      <span className="mui-label-2">
                        <RemoveIcon />
                      </span>
                    </Button>

                    <input
                      key={i}
                      type="text"
                      className="mui-text"
                      value={count}
                      readOnly
                    />

                    <Button
                      sx={{ padding: "0 0 0 0" }}
                      key={i}
                      onClick={increment}
                    >
                      <span className="mui-label-1">
                        <AddIcon />
                      </span>
                    </Button>
                  </div>
                }
                disablePadding
              >
                <ListItemButton
                  className="itemsbutton"
                  role={undefined}
                  onClick={handleToggle(i)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(i) !== -1}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText primary={value} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};
export default Biryani;
