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

const Veg = (Props: any) => {
  const items: any[] = Props.items;
  const [counts, setCounts] = useState(new Array(items.length).fill(0));
  const [checked, setChecked] = useState(new Array(items.length).fill(false));
  const [itemCount, setItemCount] = useState(0);
  const [list, setList] = useState([] as any[]);
  const [totalItemCount, setTotalItemCount] = useState([] as any[]);

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
    const prevItemsCounts = [...totalItemCount];
    if (checked[index] === false) {
      prevList.push(value);
      prevItemsCounts.push({
        value: value.id,
        count: ++counts[index],
      });
      setList(
        prevList.filter(
          (value, index, selfarray) => selfarray.indexOf(value) === index
        )
      );
      setTotalItemCount(
        prevItemsCounts.filter(
          (value, index, selfarray) => selfarray.indexOf(value) === index
        )
      );
    } else {
      list.map((listvalue, listindex) => {
        if (items[index].id === listvalue.id) prevList.splice(listindex, 1);
        setList(prevList);
      });

      totalItemCount.map((item, itemindex) => {
        if (items[index].id === item.value) {
          totalItemCount.splice(itemindex, 1);
        }
      });
    }
  };

  const increment = (index: any, value: any) => {
    const newChecked = [...checked];
    const listofselected = [...list];
    const newCounts = [...counts];
    const itemsCounts = [...totalItemCount];
    if (++counts[index] === 1) {
      newChecked[index] = true;
      setChecked(newChecked);
      listofselected.push(value);
      setList(listofselected);
      itemsCounts.push({
        value: value.id,
        count: counts[index],
      });
      newCounts[index]++;
      setCounts(newCounts);
      setItemCount(
        newCounts.reduce(
          (prevvalue, currentValue) => prevvalue + currentValue,
          0
        )
      );
      setTotalItemCount(itemsCounts);
    } else {
      newCounts[index]++;
      setCounts(newCounts);
      setItemCount(
        newCounts.reduce(
          (prevvalue, currentValue) => prevvalue + currentValue,
          0
        )
      );
      totalItemCount.map((item, itemindex) => {
        if (value.id === item.value) {
          totalItemCount[itemindex].count++;
        }
      });
      setList(listofselected);
    }
  };

  const sendDataToParent = () => {
    Props.itemCount(itemCount);
    Props.itemList(list);
    Props.counts(totalItemCount);
  };

  const decrement = (index: any, value: any) => {
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
      totalItemCount.map((item, itemindex) => {
        if (items[index].id === item.value) {
          totalItemCount.splice(itemindex, 1);
        }
      });
    } else {
      setList(listofselected);
      totalItemCount.map((item, itemindex) => {
        if (value.id === item.value) {
          totalItemCount[itemindex].count--;
        }
      });
    }
  };

  useEffect(() => {
    const newChecked = counts.map((count) => count > 0);
    setChecked(newChecked);
    sendDataToParent();
  }, [counts]);
  return (
    <>
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
              backgroundColor: "rgb(26 219 21 / 49%)",
              margin: "0 0 0 0",
            }}
          >
            VEG
          </h3>
          <div>
            <List sx={{ width: "100%", bgcolor: "transparent" }}>
              {items.map((value, i) => (
                <ListItem
                  className="itemsbox"
                  key={i}
                  secondaryAction={
                    <div className="mui-buttons">
                      <Button
                        key={i}
                        sx={{ padding: "0 0 0 0" }}
                        disabled={counts[i] === 0}
                        onClick={() => {
                          decrement(i, value);
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
export default Veg;
