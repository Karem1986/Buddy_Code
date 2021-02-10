//Login page
import React, { useState } from "react";
//Material UI
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Link,
  Snackbar, 
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
//Redux
import { login } from "../../Redux/actions";
import { useDispatch } from "react-redux";

export default function Login() {
  //Redux
  const dispatch = useDispatch();
  const classes = useStyles();
  //Link to signup:
  const history = useHistory();
  const toSignup = () => {
    history.push(`/signup`);
  };
  //Form:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function submitForm(event) {
    event.preventDefault();
    console.log("form submitted!");
    console.log(`
  Email: ${email}
  Password: ${password}`);

    setEmail("");
    setPassword("");

    setLoggedIn(true);
    // store fake access token for Redux

    dispatch(login("ImaFakeTOKEN"));
  }

  function onChange(event, set_Function) {
    set_Function(event.target.value);
  }

  return (
    <div>
    <div> <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={loggedIn}
        autoHideDuration={3000}
        onClose={()=>setLoggedIn(false)}
        message=' Your form was submitted successfully'
      /></div>
        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className={classes.loginForm}
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Login
                  </Typography>
                </Grid>
                <Grid item>
                  <form onSubmit={submitForm}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="email"
                          placeholder="Email"
                          fullWidth
                          name="email"
                          variant="outlined"
                          value={email}
                          onChange={(event) => onChange(event, setEmail)}
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          value={password}
                          onChange={(event) => onChange(event, setPassword)}
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          LOGIN
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot Password?
                  </Link>
                  <Link onClick={toSignup} variant="body2">
                    Signup
                  </Link>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    
  );
}
