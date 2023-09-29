import { Box, InputLabel } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { LookupTypes } from "../../common/lookuptypes";
import { useState } from "react";
const GlobalSettings = () => {
  const menuitems: string[] = [
    LookupTypes.BIRYANI,
    LookupTypes.CURRIES,
    LookupTypes.FRIEDRICE_NOODLES,
    LookupTypes.RICE,
    LookupTypes.ROTIS,
    LookupTypes.STARTERS,
    "items",
  ];
  const [lookupname, setLookupname] = useState("");
  const handleChange = (value: any) => {
    console.log(value);
    setLookupname(value);
  };
  return (
    <Box sx={{ width: "20%", padding: "20px" }}>
      <div>
        <InputLabel>Menu-settings</InputLabel>
        <Select
          fullWidth
          value={lookupname}
          onChange={(e) => handleChange(e.target.value)}
        >
          {menuitems.map((item, i) => (
            <MenuItem value={item} key={i}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>
    </Box>
  );
};
export default GlobalSettings;
