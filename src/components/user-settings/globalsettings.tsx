import {
  Alert,
  AlertColor,
  Box,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { LookupTypes } from "../../common/lookuptypes";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ClearIcon from "@mui/icons-material/Clear";
import {
  deleteLookup,
  getLookupData,
  saveLookupInfo,
} from "../../service/lookupservice";
import globalObject from "../../common/global-variables";
import Notify from "../../common/notify";

interface Item {
  type: number | undefined;
  name: string;
  price: string;
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

  const [lookupname, setLookupname] = useState("biryani");
  const [editIndex, setEditIndex] = useState(-1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [lookupData, setLookupData] = useState([] as any[]);
  const [textValue, setTextValue] = useState("");
  const [error, setError] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState({
    severity: "success",
    msg: "",
  } as {
    severity: AlertColor;
    msg: string;
  });

  const [items, setItems] = useState<Item[]>([
    {
      type: 1,
      name: "",
      price: "",
    },
  ]);

  const handleMenuChange = (value: any) => {
    setLookupname(value);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const refreshLookupdata = () => {
    getLookupData(lookupname)
      .then((resp) => {
        globalObject.lookupvalues[lookupname] = resp.data[lookupname];
        setLookupData(globalObject.lookupvalues[lookupname]);
      })
      .catch();
  };

  const handleSave = (data?: any, id?: any) => {
    const existingData: any[] = globalObject.lookupvalues[lookupname].map(
      (e: any) => e.name.toLowerCase()
    );

    const isExisting: Boolean =
      existingData.filter(
        (e: any) => e == formik.values.name.toLocaleLowerCase()
      ).length > 0;
    if (data.id === undefined) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      !isExisting
        ? save()
        : (setToastMsg({
            severity: "error",
            msg: `${data.name} already exist`,
          }),
          setShowToast(true));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      textValue.toLowerCase() === formik.values.name.toLowerCase() ||
      !isExisting
        ? save(data, id)
        : (setToastMsg({
            severity: "error",
            msg: `${formik.values.name} already exist`,
          }),
          setShowToast(true));
    }
  };

  const save = (data?: any, id?: any) => {
    let req: Item[] = [];

    if (id) {
      req.push({
        type: data.type,
        name: formik.values.name,
        price: formik.values.price,
      });
    } else {
      items.map((data) =>
        req.push({ type: data.type, name: data.name, price: data.price })
      );
    }
    saveLookupInfo(req, lookupname)
      .then((_resp) => {
        setEditIndex(-1);
        setShowToast(true);
        setToastMsg({
          severity: "success",
          msg: "record added successfully!",
        });
        setDialogOpen(false);
        refreshLookupdata();
      })
      .catch((err) => console.log(err));
  };

  const handleAddAnotherItem = () => {
    const newItem: Item = {
      type: 1,
      name: "",
      price: "",
    };
    setItems([...items, newItem]);
  };

  const handleChange = (event: any, index: number) => {
    setRowsPerPage(5);
    setPage(0);
    const { name, value } = event.target;
    const updatedItems: any = [...items];
    updatedItems[index][name] = value;
    setItems(updatedItems);
  };

  const handleTypeChange = (event: any, index: number) => {
    const selectedValue = event.target.value as number | undefined;
    const updatedItems = [...items];
    updatedItems[index].type = selectedValue;
    setItems(updatedItems);
  };

  const handleClose = (reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setDialogOpen(false);
    setOpen(false);
  };

  const handleDelete = (id: any) => {
    deleteLookup(lookupname, id)
      .then((_resp) => {
        setShowToast(true);
        setToastMsg({
          severity: "success",
          msg: "record successfully deleted",
        });
        refreshLookupdata();
      })
      .catch();
  };

  const handleAlertClose = () => {
    setOpen(false);
    setDialogOpen(false);
    setItems([
      {
        type: 1,
        name: "",
        price: "",
      },
    ]);
  };

  const formik = useFormik({
    initialValues: {
      type: "",
      name: "",
      price: "",
    },
    onSubmit: (_value) => {},
  });

  useEffect(() => {
    setLookupname(lookupname);
    setLookupData(globalObject.lookupvalues[lookupname]);
  }, [lookupname]);

  return (
    <>
      <Box sx={{ width: "20%", padding: "20px" }}>
        <div>
          <InputLabel>Menu-settings</InputLabel>
          <Select
            fullWidth
            value={lookupname}
            onChange={(e) => handleMenuChange(e.target.value)}
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

                      setDialogOpen(true);
                      setItems([
                        {
                          type: 1,
                          name: "",
                          price: "",
                        },
                      ]);
                    }}
                  >
                    Add
                  </Button>
                  <Dialog open={dialogOpen} onClose={handleClose}>
                    <DialogTitle>Add Item</DialogTitle>
                    <TableBody>
                      <Snackbar
                        open={open}
                        autoHideDuration={500}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        onClose={handleAlertClose}
                      >
                        <Alert onClose={handleAlertClose} severity="success">
                          Record saved successfully!
                        </Alert>
                      </Snackbar>
                      <Snackbar
                        open={open}
                        autoHideDuration={500}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                        onClose={handleAlertClose}
                      >
                        <Alert onClose={handleAlertClose} severity="success">
                          Record deleted successfully!
                        </Alert>
                      </Snackbar>
                      <Box margin={1}>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={handleAddAnotherItem}
                        >
                          Add Another Item
                        </Button>
                        <Table size="small" aria-label="a dense table">
                          <TableHead>
                            <TableRow sx={{ display: "flex" }}>
                              <TableCell sx={{ marginRight: "20px" }}>
                                ITEM TYPE
                              </TableCell>
                              <TableCell sx={{ marginRight: "40px" }}>
                                ITEM NAME
                              </TableCell>
                              <TableCell>PRICE</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <div>
                              <TableRow>
                                <Box sx={{ width: "100%" }}>
                                  {items.map((item, index) => (
                                    <div
                                      key={index}
                                      style={{
                                        display: "flex",
                                        paddingTop: "10px",
                                        paddingBottom: "10px",
                                      }}
                                    >
                                      <FormControl>
                                        <Select
                                          sx={{ width: "120px" }}
                                          value={item.type}
                                          onChange={(e) =>
                                            handleTypeChange(e, index)
                                          }
                                          name="type"
                                        >
                                          <MenuItem value="" disabled>
                                            Select item type
                                          </MenuItem>
                                          <MenuItem value={1}>Non-Veg</MenuItem>
                                          <MenuItem value={2}>Veg</MenuItem>
                                        </Select>
                                      </FormControl>
                                      <TextField
                                        placeholder="enter item name"
                                        sx={{ width: "150px" }}
                                        name="name"
                                        value={item.name}
                                        onChange={(e) => handleChange(e, index)}
                                      />
                                      <TextField
                                        placeholder="enter price"
                                        sx={{ width: "150px" }}
                                        name="price"
                                        value={item.price}
                                        onChange={(e) => handleChange(e, index)}
                                      />
                                      <Button
                                        className="mr10"
                                        onClick={() => handleRemoveItem(index)}
                                      >
                                        <ClearIcon />
                                      </Button>
                                    </div>
                                  ))}
                                  <Button
                                    // variant="contained"
                                    color="primary"
                                    onClick={handleSave}
                                  >
                                    Save
                                  </Button>
                                </Box>
                              </TableRow>
                            </div>
                          </TableBody>
                        </Table>
                      </Box>
                    </TableBody>
                  </Dialog>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? lookupData.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : lookupData
              ).map((data, i) => (
                <TableRow key={i}>
                  <TableCell>
                    {i !== editIndex && data.name}
                    {i === editIndex && (
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
                    )}
                  </TableCell>
                  <TableCell>
                    {i !== editIndex && data.price}
                    {i === editIndex && (
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
                    )}
                  </TableCell>
                  <TableCell>
                    {editIndex !== i && (
                      <DriveFileRenameOutlineIcon
                        fontSize="small"
                        style={{ cursor: "pointer", color: "#a72037" }}
                        onClick={() => {
                          setEditIndex(i);
                          formik.setFieldValue("name", data.name);
                          formik.setFieldValue("price", data.price);
                          setTextValue(formik.values.name);
                        }}
                      />
                    )}
                    {editIndex === i && (
                      <CheckCircleRoundedIcon
                        style={{
                          cursor:
                            !formik.values.name ||
                            formik.values.name.trim() === ""
                              ? "default"
                              : "pointer",
                          color: "#a72037",
                        }}
                        onClick={() => {
                          if (
                            formik.values.name &&
                            formik.values.name.trim() != ""
                          )
                            handleSave(data, i);
                        }}
                      />
                    )}
                    <DeleteRoundedIcon
                      fontSize="small"
                      style={{
                        marginLeft: "15px",
                        cursor: "pointer",
                        color: "#a72037",
                      }}
                      onClick={() => handleDelete(data.id)}
                    />
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TablePagination
                  colSpan={2}
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  count={lookupData.length}
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
                />
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Box>
      <Notify
        open={showToast}
        severity={toastMsg.severity}
        onClose={() => setShowToast(false)}
      >
        <span>{toastMsg.msg}</span>
      </Notify>
    </>
  );
};
export default GlobalSettings;
