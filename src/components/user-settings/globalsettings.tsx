import {
  Box,
  Button,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { LookupTypes } from "../../common/lookuptypes";
import { useState } from "react";
import { useFormik } from "formik";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
const GlobalSettings = () => {
  const menuitems: string[] = [
    LookupTypes.BIRYANI,
    LookupTypes.CURRIES,
    LookupTypes.FRIEDRICE_NOODLES,
    LookupTypes.RICE,
    LookupTypes.ROTIS,
    LookupTypes.STARTERS,
  ];
  const [lookupname, setLookupname] = useState("");
  const [editIndex, setEditIndex] = useState(1);
  const handleChange = (value: any) => {
    console.log(value);
    setLookupname(value);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (_value) => {},
  });

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
      <div style={{ width: "55vw" }}>
        <Table className="global-setting" style={{ tableLayout: "fixed" }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "40vw" }}>Value</TableCell>
              <TableCell style={{ width: "5vw" }}>Action</TableCell>
              <TableCell style={{ width: "10vw" }}>
                <Button
                  className="default-btn bg-btn"
                  onClick={() => {
                    setEditIndex(-1);
                    formik.resetForm();
                    // if (selectedSetting == "skills") setShowSkillsDialog(true);
                    // else setShowDialog(true);
                  }}
                >
                  Add
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {(rowsPerPage > 0
              ? tableData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : tableData
            ).map((data, i) => ( */}
            <TableRow key={1}>
              <TableCell>
                {/* {i != editIndex && data.name}
                  {i == editIndex && ( */}
                <form>
                  <TextField
                    value={formik.values.name}
                    fullWidth
                    id="name"
                    size="small"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </form>
                {/* )} */}
              </TableCell>
              <TableCell>
                {editIndex !== 0 && (
                  <DriveFileRenameOutlineIcon
                    fontSize="small"
                    style={{ cursor: "pointer", color: "#a72037" }}
                    // onClick={() => {
                    //   setEditIndex(i);
                    //   formik.setFieldValue("name", data.name);
                    //   setTextValue(data.name);
                    // }}
                  />
                )}
                {editIndex === 0 && (
                  <CheckCircleRoundedIcon
                    style={{
                      cursor:
                        !formik.values.name || formik.values.name.trim() === ""
                          ? "default"
                          : "pointer",
                      color: "#a72037",
                      opacity:
                        !formik.values.name || formik.values.name.trim() === ""
                          ? "50%"
                          : "100%",
                    }}
                    // onClick={() => {
                    //   if (
                    //     formik.values.name &&
                    //     formik.values.name.trim() != ""
                    //   )
                    //     handleSave(data.id);
                    // }}
                  />
                )}
                <DeleteRoundedIcon
                  fontSize="small"
                  style={{
                    marginLeft: "15px",
                    cursor: "pointer",
                    color: "#a72037",
                  }}
                  // onClick={() => deleteData(data.id)}
                />
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
            {/* // ))} */}
            <TableRow>
              {/* <TablePagination
                colSpan={2}
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={(_e, p) => setPage(p)}
                onRowsPerPageChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setPage(0);
                }}
                className="pagination"
              /> */}
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </Box>
  );
};
export default GlobalSettings;
