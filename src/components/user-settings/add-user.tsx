import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Table,
} from "@mui/material";
import { useState } from "react";
import "./user-settings.css";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  handleClose: (event: any, reason: string) => void;
}

const AddUser = ({ handleClose }: Props) => {
  const [role, setRole] = useState("");
  const roles: string[] = ["Owner", "Worker"];
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    boxShadow: 24,
    p: 4,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("last name is required"),
    email: Yup.string().required("email is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    },
    onSubmit: (values) => {},
    validationSchema: validationSchema,
  });
  return (
    <>
      <Modal open onClose={handleClose}>
        <Box sx={style}>
          <h2>Add user</h2>
          <form style={{ marginBottom: "10px" }} onSubmit={formik.handleSubmit}>
            <table className="usertable">
              <tbody>
                <tr>
                  <td>
                    <FormControl variant="standard" className="user-form">
                      <InputLabel>First Name *</InputLabel>
                      <Input
                        id="fname"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="err-msg">{formik.errors.firstName}</div>
                      ) : null}
                    </FormControl>
                  </td>
                  <td>
                    <FormControl variant="standard" className="user-form">
                      <InputLabel>Last Name *</InputLabel>
                      <Input
                        id="lname"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="err-msg">{formik.errors.lastName}</div>
                      ) : null}
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormControl variant="standard" className="user-form">
                      <InputLabel>Email</InputLabel>
                      <Input
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="err-msg">{formik.errors.email}</div>
                      ) : null}
                    </FormControl>
                  </td>
                  <td>
                    <FormControl variant="standard" className="user-form">
                      <InputLabel>Role</InputLabel>
                      <Select
                        id="role"
                        name="role"
                        sx={{ width: "150px" }}
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        {roles.map((role, i) => (
                          <MenuItem value={role} key={i}>
                            {role}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Button style={{ marginLeft: "100px" }}>Submit</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default AddUser;
