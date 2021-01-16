import { makeStyles, createStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(7),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      alignItems: "center",
    },
    button: {
      size: "large",
      backgroundColor: green[500],
      
    }
  })
);
