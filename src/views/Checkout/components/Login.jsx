import {
  Box,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  loginSec: {
    width: "100%",
    margin: "20px 40px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "40%",
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
    flexDirection: "row",
    justifyContent: "space-between",
    width: "25%",
    margin: "0",
    marginTop: "25px",
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
    padding: "6px 12px",
    // marginLeft: "2%",
    height: "42px",
    lineHeight: "42px",
    border: "1px solid #e5e5e5",
    color: " #737373",
    width: "100%",
    marginTop: "2%",
    marginBottom: "5%",
  },
  RegisterLink: {
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
}));

const Login = () => {
  const classes = useStyle();

  return (
    <section className={classes.loginSec}>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          width: "40%",
          textAlign: "center",
          margin: "20px 0px",
        }}
      >
        <Typography>
          If you have shopped with us before, please enter your details below.
          If you are a new customer, please proceed to the Billing section.
        </Typography>
      </div>
      <form className={classes.form}>
        <Typography>USERNAME OR EMAIL ADDRESS *</Typography>
        <input type="email" id="email" className={classes.input} />
        <Typography for="password">PASSWORD *</Typography>
        <input type="password" id="password" className={classes.input} />
        <button className={classes.button2}> Login </button>
      </form>
      <div className={classes.remmember}>
        <div>
          <input type="checkbox" id="remember"></input>
          <label for="remember" className={classes.forgetPassword}>
            REMEMBER ME
          </label>
        </div>
        <Link to="/forgetpassword" className={classes.forgetPassword}>
          LOST YOUR PASSWORD?
        </Link>
      </div>
    </section>
  );
};

export default Login;
