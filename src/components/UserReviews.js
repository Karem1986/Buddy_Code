import React from "react";

// Material UI components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  Fade,
  Snackbar,
  CardActions,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    media: {
      paddingTop: "56.25%", // 16:9
      minHeight: 400,
      minWidth: 380,
      alignItems: "center",
      borderRadius: 10,
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);



export default function UserReview(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <Card elevation={23} className={classes.root}>
      <Paper>
        <CardHeader
          title={props.name}
          subheader="Code Mate Reviews"
          
        />

        <Typography paragraph>
          <Snackbar
            open={state.open}
            onClose={handleClose}
            TransitionComponent={state.Transition}
            message={<h1>{props.description}</h1>}
            key={state.Transition.name}
          />
        </Typography>

        <CardMedia
          className={classes.media}
          image={props.imageUrl}
          title={props.name}
        />
        <CardContent>
          <Typography paragraph>{props.testimonial}</Typography>
        </CardContent>
        <CardActions spacing={5}>
    
        </CardActions>
      </Paper>
    </Card>
  );
}
