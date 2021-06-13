import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Col } from "react-bootstrap"
import { useHistory, Link } from "react-router-dom";
//Redux
import { login } from "../../Redux/actions";
import { useDispatch } from "react-redux";

export default function Login() {
  //Redux
  const dispatch = useDispatch();
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
    // store fake access token for Redux:
    dispatch(login("ImaFakeTOKEN"));
  }
  useEffect(() => {
    if (loggedIn) {
        history.push("/code_session")
    }
}, [loggedIn, history]) 


  return (
    <Container>
            <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
                <h1 className="mt-5 mb-5">Login</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                <Form.Group className="mt-5">
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={submitForm}
                    >
                        Log in
                    </Button>
                </Form.Group>
                <Link
                    to="/signup"
                    style={{
                        textAlign: "center",
                        backgroundColor: "Turquoise",
                        color: "black",
                    }}
                >
                    Click here to sign up
                </Link>
            </Form>
        </Container>
    // <div>
    // <div> <Snackbar
    //     anchorOrigin={{
    //       vertical: 'top',
    //       horizontal: 'right',
    //     }}
    //     open={loggedIn}
    //     autoHideDuration={3000}
    //     onClose={()=>setLoggedIn(false)}
    //     message=' Your form was submitted successfully'
    //   /></div>
    //     <Grid container spacing={0} justify="center" direction="row">
    //       <Grid item>
    //         <Grid
    //           container
    //           direction="column"
    //           justify="center"
    //           spacing={2}
    //           className={classes.loginForm}
    //         >
    //           <Paper
    //             variant="elevation"
    //             elevation={2}
    //             className="login-background"
    //           >
    //             <Grid item>
    //               <Typography component="h1" variant="h5">
    //                 Login
    //               </Typography>
    //             </Grid>
    //             <Grid item>
    //               <form onSubmit={submitForm}>
    //                 <Grid container direction="column" spacing={2}>
    //                   <Grid item>
    //                     <TextField
    //                       type="email"
    //                       placeholder="Email"
    //                       fullWidth
    //                       name="email"
    //                       variant="outlined"
    //                       value={email}
    //                       onChange={(event) => onChange(event, setEmail)}
    //                       required
    //                       autoFocus
    //                     />
    //                   </Grid>import Container from "react-bootstrap/Container"
    //                   <Grid item>
    //                     <TextField
    //                       type="password"
    //                       placeholder="Password"
    //                       fullWidth
    //                       name="password"
    //                       variant="outlined"
    //                       value={password}
    //                       onChange={(event) => onChange(event, setPassword)}
    //                       required
    //                     />
    //                   </Grid>
    //                   <Grid item>
    //                     <Button
    //                       variant="contained"
    //                       color="primary"
    //                       type="submit"
    //                       className="button-block"
    //                     >
    //                       LOGIN
    //                     </Button>
    //                   </Grid>
    //                 </Grid>
    //               </form>
    //             </Grid>
    //             <Grid item>
    //               <Link href="#" variant="body2">
    //                 Forgot Password?
    //               </Link>
    //               <Link onClick={toSignup} variant="body2">
    //                 Signup
    //               </Link>
    //             </Grid>
    //           </Paper>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </div>
    
  );
}
