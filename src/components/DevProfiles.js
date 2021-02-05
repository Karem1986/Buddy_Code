import React from "react";
// Mui components
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  Link,
  Button,
  Slide,
  Fade,
  Snackbar,
  Tooltip,
  CardActions,
  Paper,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import FaceIcon from "@material-ui/icons/Face";

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
    button: {
      size: "large",
      backgroundColor: green[500],
    },

    buttonBlack: {
      size: "large",
      backgroundColor: purple[500],
    }
 
  })
);


function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function DevProfiles(props) {
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
        action={
          <Tooltip
            color="primary"
            arrow="true"
            size="medium"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title={<h2>{`Go to ${props.name}'s GitHub `}</h2>}
          >
            <Link href={props.gitUrl} target="_blank" isExternal>
              <Button
                variant="contained"
                color="primary"
                aria-label="settings"
              >
                <GitHubIcon fontSize="small" />
              </Button>
            </Link>
          </Tooltip>
        }
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
        image={props.picture}
       
      />
      <CardContent>
      <Typography variant="h5" gutterBottom>
        Location: {props.location}
      </Typography>
        </CardContent>
      <CardActions spacing={5}>
        <Button
          elevation={23}
          endIcon={<FaceIcon />}
          variant="contained"
          color="primary"
          className={classes.buttonBlack}
          onClick={handleClick(SlideTransition)}
        >
          About
        </Button>
  
          <Button className={classes.button}>Message</Button>
      
      </CardActions>
    </Paper>
  </Card>
  );
}
