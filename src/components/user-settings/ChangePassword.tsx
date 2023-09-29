import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
} from "@mui/material";
import "./user-settings.css";

const ChangePassword = () => {
  return (
    <Box
      width={200}
      marginLeft={10}
      marginTop={5}
      sx={{
        borderColor: "#981d32 !important",
        border: "double",
        padding: "20px",
      }}
    >
      <FormLabel style={{ color: "red" }}>PASSWORD</FormLabel>
      <FormControl variant="standard">
        <InputLabel>New Password</InputLabel>
        <Input type="password"></Input>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel>Retype Password</InputLabel>
        <Input type="password"></Input>
      </FormControl>
      <Button
        style={{
          borderRadius: "10px",
          padding: "3px",
          marginTop: "10px",
          backgroundColor: "lightgreen",
          color: "red",
        }}
      >
        SUBMIT
      </Button>
    </Box>
  );
};
export default ChangePassword;
