import { Alert, Snackbar, AlertColor } from "@mui/material";
interface NotifyProps {
  open: boolean;
  onClose: () => void;
  severity: AlertColor;
  children: React.ReactElement<any, any>;
}
const Notify = (props: NotifyProps) => {
  return (
    <Snackbar
      open={props.open}
      onClose={props.onClose}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={props.severity}>{props.children}</Alert>
    </Snackbar>
  );
};

export default Notify;
