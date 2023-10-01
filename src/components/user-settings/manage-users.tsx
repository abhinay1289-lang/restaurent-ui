import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useState } from "react";
import AddUser from "./add-user";
const Manageusers = () => {
  const [open, setOpen] = useState(false);
  const userheaders = ["Name", "Email", "Role", "Action"];
  const handleadduser = () => {
    setOpen(true);
  };
  const handleCloseBox = () => {
    setOpen(false);
  };
  return (
    <div>
      <div
        className="manage"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <div>
          <InputLabel sx={{ marginBottom: "10px" }}>
            <b>Manage-users</b>
          </InputLabel>
          <TextField className="password" placeholder="Search for user" />
        </div>
        <div>
          <Tooltip title="add user">
            <IconButton
              color="primary"
              onClick={handleadduser}
              sx={{ marginTop: "36px", marginLeft: "15px" }}
            >
              <PersonAddAltIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          {open && <AddUser handleClose={handleCloseBox} />}
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" sx={{ width: "90%" }}>
            <TableHead>
              <TableRow>
                {userheaders.map((headers) => (
                  <TableCell>{headers}</TableCell>
                ))}
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default Manageusers;
