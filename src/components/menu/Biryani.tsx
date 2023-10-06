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
  const [checked, setChecked] = useState([0]);

  const handleToggle = (value: number) => () => {
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
  const disabling = (value: any) => {
    console.log("disabling : " + value);
    decrement();
    if (count <= 0) setdisabled(true);
  };
  const increment = () => {
    setCount(++count);
    if (count > 0) setdisabled(false);
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
          {/* <ul style={{ display: "flex", flexDirection: "column" }}>
            {biryaniItems.map((item, i) => (
              <li
                key={i}
                style={{ display: "flex" }}
                onChange={() => display(i)}
                className="list"
              >
                <div>
                  <section className="section">
                    <span className="mui-box">
                      <Checkbox />
                    </span>
                    <span>{item}</span>
                    <span className="mui-buttons">
                      <Button
                        key={i}
                        className="addicon"
                        disabled={disabled}
                        onClick={() => disabling(selectedItem)}
                      >
                        <span className="mui-label-2">
                          <RemoveIcon />
                        </span>
                      </Button>
                      <input type="text" className="mui-text" value={count} />

                      <Button key={i} className="addicon" onClick={increment}>
                        <span className="mui-label-1">
                          <AddIcon />
                        </span>
                      </Button>
                    </span>
                  </section>
                </div>
              </li>
            ))}
          </ul> */}
          {biryaniItems.map((value, i) => (
            <ListItem
              className="itemsbox"
              key={i}
              secondaryAction={
                <div className="mui-buttons">
                  <Button
                    key={i}
                    className="addicon"
                    disabled={disabled}
                    onClick={() => disabling(selectedItem)}
                  >
                    <span className="mui-label-2">
                      <RemoveIcon />
                    </span>
                  </Button>
                  <input type="text" className="mui-text" value={count} />

                  <Button key={i} className="addicon" onClick={increment}>
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
