import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  Link,
  Snackbar,
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
import ClearIcon from "@mui/icons-material/Clear";

interface items {
  item?: string;
  price?: string;
}

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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleAdd = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        item: "",
        price: "",
      },
    ]);
  };

  const handleSave = () => {
    setRows(rows);
    console.log("saved : ", rows);
    setDisable(true);
    setOpen(true);
  };

  const handleInputChange = (e: any, index: number) => {
    setDisable(false);
    const { name, value } = e.target;
    const list = [...rows];
    // list[index][name] = value;
    setRows(list);
  };
  const handleConfirm = () => {
    setShowConfirm(true);
  };

  const handleRemoveClick = (i: any) => {
    const list = [...rows];
    list.splice(i, 1);
    setRows(list);
    setShowConfirm(false);
  };

  const handleNo = () => {
    setShowConfirm(false);
  };

  const handleChange = (value: any) => {
    console.log(value);
    setLookupname(value);
  };
  const handleClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setDialogOpen(false);
    setOpen(false);
  };
  const handleAlertClose = () => {
    setOpen(false);
  };

  const [rows, setRows] = useState([{ id: 1, item: "", price: "" }]);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
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
              <TableCell style={{ width: "30vw" }}>Item</TableCell>
              <TableCell style={{ width: "5vw" }}>Price</TableCell>
              <TableCell style={{ width: "5vw" }}>Action</TableCell>
              <TableCell style={{ width: "10vw" }}>
                <Button
                  className="default-btn bg-btn"
                  onClick={() => {
                    setEditIndex(-1);
                    formik.resetForm();
                    // if (selectedSetting == "skills") setShowSkillsDialog(true);
                    // else setShowDialog(true);
                    setDialogOpen(true);
                  }}
                >
                  Add
                </Button>
                <Dialog open={dialogOpen} onClose={handleClose}>
                  <DialogTitle>Add Item</DialogTitle>
                  <TableBody>
                    <Snackbar
                      open={open}
                      autoHideDuration={1000}
                      anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      onClose={handleClose}
                    >
                      <Alert onClose={handleAlertClose} severity="success">
                        Record saved successfully!
                      </Alert>
                    </Snackbar>
                    <Box margin={1}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <div style={{ display: "flex" }}>
                            <Button
                              sx={{ minWidth: "200px" }}
                              onClick={handleAdd}
                            >
                              ADD ANOTHER ITEM
                            </Button>

                            <Button onClick={handleSave}>SAVE</Button>
                          </div>
                        </div>
                      </div>
                      <Table
                        // className={classes.table}
                        size="small"
                        aria-label="a dense table"
                      >
                        <TableHead>
                          <TableRow sx={{ display: "flex" }}>
                            <TableCell sx={{ marginRight: "100px" }}>
                              ITEM NAME
                            </TableCell>
                            <TableCell>PRICE</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, i) => {
                            return (
                              <div>
                                <TableRow>
                                  <TableCell padding="none">
                                    <input
                                      className="itemInput"
                                      // value={row.firstname}
                                      name="firstname"
                                      placeholder="enter item name"
                                      onChange={(e) => handleInputChange(e, i)}
                                    />
                                  </TableCell>
                                  <TableCell padding="none">
                                    <input
                                      type="number"
                                      className="itemInput"
                                      // value={row.lastname}
                                      name="lastname"
                                      placeholder="enter price"
                                      onChange={(e) => handleInputChange(e, i)}
                                    />
                                  </TableCell>
                                  <TableCell padding="none">
                                    <Button
                                      className="mr10"
                                      onClick={() => handleRemoveClick(i)}
                                    >
                                      <ClearIcon />
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              </div>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </Box>
                  </TableBody>
                </Dialog>
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
                {/* {i != editIndex && data.name}
                  {i == editIndex && ( */}
                <form>
                  <TextField
                    type="number"
                    value={formik.values.price}
                    fullWidth
                    id="price"
                    size="small"
                    name="price"
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
