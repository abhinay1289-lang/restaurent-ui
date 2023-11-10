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
  const [list, setList] = useState([] as any[]);
  const [itemCount, setItemCount] = useState(0);
  const [totalCount, setTotalCount] = useState([] as any[]);

  const handleToggle = (index: number, value: any) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    const newCounts = [...counts];
    newCounts[index] = newChecked[index] ? 1 : 0;
    setChecked(newChecked);
    setCounts(newCounts);
    setItemCount(
      newCounts.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
    );
    listOfSelectedItems(index, value);
  };

  const listOfSelectedItems = (index: number, value: any) => {
    const prevList = [...list];
    if (checked[index] === false) {
      prevList.push(value);
      setList(prevList);
    } else {
      list.map((listvalue, listindex) => {
        if (items[index].id === listvalue.id) prevList.splice(listindex, 1);
        setList(prevList);
      });
    }
  };

  const sendDataToParent = () => {
    Props.itemCount(itemCount);
    Props.itemList(list);
    Props.counts(counts.filter((count) => count > 0));
  };

  const increment = (index: any, value: any) => {
    const listofselected = [...list];
    const newCounts = [...counts];
    const itemsCounts = [...totalCount];

    if (++counts[index] === 1) {
      listofselected.push(value);
      setList(listofselected);
      itemsCounts.push({
        itemId: value.id,
        count: counts[index],
      });
      console.log("items", items[index]);
      console.log(index);
      console.log("total count", itemsCounts);
      totalCount.map((itemcount, itemindex) => {
        if (items[index].id === itemsCounts[itemindex].itemId) {
          console.log("if loop", items[index], itemsCounts[itemindex]);
          itemsCounts[index].count++;
        }
      });

      console.log(totalCount);
      setTotalCount(itemsCounts);
    } else {
      newCounts[index]++;
      setCounts(newCounts);
      setItemCount(
        newCounts.reduce(
          (prevvalue, currentValue) => prevvalue + currentValue,
          0
        )
      );
      newCounts.map((counts) => {
        if (items[index].id === counts[index]) {
          totalCount.splice(index, 1);
        }
      });
      // setTotalCount(newCounts);
      setList(listofselected);
    }
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
    const listofselected = [...list];
    if (--counts[index] === 0) {
      list.map((listvalue, listindex) => {
        if (items[index].id === listvalue.id)
          listofselected.splice(listindex, 1);
        setList(listofselected);
      });
    } else {
      setList(listofselected);
    }
  };

  useEffect(() => {
    const newChecked = counts.map((count) => count > 0);
    setChecked(newChecked);
    sendDataToParent();
  }, [counts]);

  return (
    <>
      <span>{JSON.stringify(itemCount)}</span>
      <span>{JSON.stringify(list)}</span>
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
                        onClick={() => {
                          decrement(i);
                        }}
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
                        onClick={() => increment(i, value)}
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
                    onClick={() => {
                      handleToggle(i, value);
                    }}
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
    </>
  );
};
export default Nonveg;
