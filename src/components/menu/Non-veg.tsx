import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "./menu.css";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";

const Nonveg = (Props: any) => {
  const items: any[] = Props.items;
  const [counts, setCounts] = useState(new Array(items.length).fill(0));
  const [checked, setChecked] = useState(new Array(items.length).fill(false));
  const [itemCount, setItemCount] = useState(0);

  const handleToggle = (value: number) => () => {
    const newChecked = [...checked];
    newChecked[value] = !newChecked[value];

    const newCounts = [...counts];
    newCounts[value] = newChecked[value] ? 1 : 0;

    setChecked(newChecked);
    setCounts(newCounts);
    setItemCount(
      newCounts.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
  };

  const sendDataToParent = () => {
    Props.itemCount(itemCount);
  };

  const increment = (index: any) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
    setItemCount(
      newCounts.reduce((prevvalue, currentValue) => prevvalue + currentValue, 0)
    );
  };

  const decrement = (index: any) => {
    const newCounts = [...counts];
    newCounts[index]--;
    setCounts(newCounts);
    setItemCount(
      newCounts.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
  };

  useEffect(() => {
    const newChecked = counts.map((count) => count > 0);
    setChecked(newChecked);
    sendDataToParent();
  }, [counts]);

  return (
    <div
      style={{
        backgroundColor: "transparent",
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        marginTop: "5%",
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
          <List sx={{ width: "100%", bgcolor: "transparent" }}>
            {items.map((value, i) => (
              <ListItem
                className="itemsbox"
                key={value}
                secondaryAction={
                  <div className="mui-buttons">
                    <Button
                      key={i}
                      sx={{ padding: "0 0 0 0" }}
                      disabled={counts[i] === 0}
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
                      checked={counts[i] > 0}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText primary={value.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
};
export default Nonveg;
