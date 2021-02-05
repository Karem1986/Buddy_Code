// import { makeStyles, createStyles } from "@material-ui/core/styles";

// export const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       flexDirection: "row",
//       margin: "20px",
//       padding: theme.spacing(10),
//       elevation: 10
//     },
//     paper: {
//       padding: theme.spacing(8),
//       textAlign: "center",
//       alignItems: "center",
//     },
//   })
// );

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
  
  })
);
