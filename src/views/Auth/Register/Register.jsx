import React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  loginSec: {
    padding: "70px 0",
    width: "100%",
    height: "80vh",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "25%",
    margin: "0",
    [theme.breakpoints.down("md")]: {
      width: "85%",
      margin: "0",
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%",
      margin: "0",
    },
  },
  remmember: {
    display: "flex",
    flexDirection: "column",
    width: "25%",
    margin: "0",
    [theme.breakpoints.down("md")]: {
      width: "85%",
      margin: "0",
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%",
      margin: "0",
    },
  },
  input: {
    padding: "10px 16px",
    // marginLeft: "2%",
    height: "42px",
    lineHeight: "42px",
    border: "1px solid #e5e5e5",
    color: " #737373",
    width: "100%",
    marginTop: "5%",
    marginBottom: "10%",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    bottom: 10,
  },
  RegisterLink: {
    textDecoration: "underline black",
    color: "black",
    fontSize: "20px",
    fontWeight: 500,
  },
  loginLink: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    opacity: "0.5",
    fontWeight: 500,
  },
  button2: {
    backgroundColor: "black",
    width: "100%",
    padding: "15px 16px",
    border: "1px solid black",
    boxSizing: "content-box",
    color: "white",
    fontSize: 16,
    "&:hover": {
      opacity: "0.9",
    },
  },
  forgetPassword: {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    fontWeight: 500,
  },
  text: {
    width: "110%",
  },
}));

const Register = () => {
  const classes = useStyle();

  return (
    <section className={classes.loginSec}>
      <List className={classes.list}>
        <ListItem>
          <Link to="/login" className={classes.loginLink}>
            Login
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/register" className={classes.RegisterLink}>
            Register
          </Link>
        </ListItem>
      </List>
      <form className={classes.form}>
        <label for="email">EMAIL ADDRESS *</label>
        <input type="email" id="email" className={classes.input} />
      </form>
      <div className={classes.remmember}>
        <div>
          <input type="checkbox" id="remember"></input>
          <label for="remember" className={classes.forgetPassword}>
            SUBSCRIBE TO OUR NEWSLETTER
          </label>
        </div>
        <br></br>
        <Typography variant="h6" className={classes.text}>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </Typography>
        <br></br>
        <button className={classes.button2}>Register</button>
      </div>
    </section>
  );
};

export default Register;
