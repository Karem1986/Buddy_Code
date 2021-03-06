import React from "react";
import { Link } from "react-router-dom";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  button: {
    backgroundColor: "black",
    borderRadius: 100,
    fontSize: 13,
    minWidth: 80,
    margin: 8,
    padding: 5,
    fontWeight: "bold",
    color: "white"
    
  },
  boxPopover: {
    backgroundColor: "black",
    borderRadius: 60,
    fontSize: 8,
    margin: 4,
    padding: 2,
  }
 
}));

function CalendarTile({ view }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null); //POPOVER
    const [showButton, setShowButton] = React.useState(false); //false because the button is not shown if not time slot is selected.

  //logic for pop up--Boolean
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const onChange = (e) => {
    if (e.target.value !== "") {
      setShowButton(true); //if a time slot is selected then show the button
    }
  };

  // Only show dropdown if we are looking at the "month" view
  return view === "month" ? (
    <div>
      <select onChange={onChange}>
        <option value="">Choose a time slot</option>
        <option value={"9am"}>9am-10am</option>
        <option value={"10am"}>10am-11am</option>
        <option value={"11am"}>11am-12am</option>
      </select>
      <div>
        {showButton && (
          <>
            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              className={classes.button}
            >
              Choose your codeMate
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            
          
            >
              <Box
             className={classes.boxPopover}
               >
              <Typography className={classes.typography}>
                <Link to="/code_session/:select_buddy">codeMate's list</Link>
              </Typography>
              </Box>
            </Popover>
          </>
        )}
      </div>
    </div>
  ) : null;
}

export default CalendarTile;
