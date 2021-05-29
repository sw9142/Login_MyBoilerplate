import React, { useState } from "react";
import Axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Naomi Choi
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RegisterPage(props) {
  const classes = useStyles();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  // const [ConfirmPassword, setConfirmPassword] = useState("");
  // const [Meg, setMeg] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onNameHandler = (e) => {
    setName(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  // const onConfirmPasswordHandler = (e) => {
  //   setConfirmPassword(e.target.value);
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // if (Password !== ConfirmPassword) {
    //   setMeg("Password and Confirm Password does not match!");
    // } else if (Password.length < 5) {
    //   setMeg("password must be more than 5 digits");
    // } else if (Name.length > 50) {
    //   setMeg("name should not be more than 50 digits");
    // } else {
    //   setMeg("");
    //

    const data = {
      Email,
      Name,
      Password,
    };
    Axios.post("/api/user/register", data).then((res) => {
      if (res.data.duplicate) {
        // setMeg("You already have an account please sign in");
      } else {
        if (res.data.success) {
          console.log("register success");
          props.history.push("/login");
        } else {
          console.log("failed to sign up: ", res.data, " or ", res.data.err);
        }
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                onChange={onNameHandler}
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={onEmailHandler}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                onChange={onPasswordHandler}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            onClick={onSubmitHandler}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default RegisterPage;

// <div>
//   <h1 style={{ width: "100%", textAlign: "center" }}>Registration Page</h1>
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       width: "100%",
//       height: "100vh",
//     }}
//   >
//     <div>
//       <p style={{ color: "red", fontSize: "0.9rem" }}> {Meg}</p>
//     </div>

//     <form style={{ display: "flex", flexDirection: "column" }}>
//       <label>Email</label>
//       <input type="email" value={Email} onChange={onEmailHandler} />

//       <label>First Name</label>
//       <input type="text" value={Name} onChange={onNameHandler} />

//       <label>Password</label>
//       <input
//         type="password"
//         value={Password}
//         onChange={onPasswordHandler}
//       />

//       <label>Confirm Password</label>
//       <input
//         type="password"
//         value={ConfirmPassword}
//         onChange={onConfirmPasswordHandler}
//       />
//       <br />
//       <button type="submit" onClick={onSubmitHandler}>
//         Sign Up
//       </button>
//     </form>
//   </div>
// </div>
