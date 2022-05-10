import {
  Box,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  setIsAuthenticate,
  setNotificationMessage,
  setUserData,
} from "../../../lib/actions";
import { setAccessToken, toast } from "../../../lib/helper";
import { loginCustomer } from "../../../utils/userUtils";
import { useHistory } from "react-router-dom";

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
  loginLink: {
    textDecoration: "underline black",
    color: "black",
    fontSize: "20px",
    fontWeight: 500,
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

const Login = ({
  isAuthenticate,
  setIsAuthenticateConnect,
  setUserDataConnect,
  setNotificationMessageConnect,
}) => {
  const classes = useStyle();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const showPasswordHandler = () => setIsShowPassword(!isShowPassword);
  const changeHandler = (setState) => (e) => setState(e.target.value);

  const isFieldsValid = () => {
    if (!email || !password) {
      toast.error(setNotificationMessageConnect, "Fields are missing");
      return false;
    } else {
      if (!email.includes("@")) {
        toast.error(setNotificationMessageConnect, "Email is not valid");
        return false;
      }
      return true;
    }
  };

  const _submit = async (e) => {
    e.preventDefault();

    if (!isFieldsValid()) {
      const elem = document.getElementById("email");
      elem.focus();
      return;
    }

    try {
      const resp = await loginCustomer({ email, password });
      toast.success(
        setNotificationMessageConnect,
        resp?.data?.message || "---"
      );
      setAccessToken(resp.data.token);
      setIsAuthenticateConnect(true);
      setUserDataConnect(resp.data.data);
      history.push("/user/dashboard");
    } catch (error) {
      toast.error(
        setNotificationMessageConnect,
        error?.response?.data?.message || error
      );
    }
  };

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
      <form onSubmit={_submit} className={classes.form}>
        <label for="email">USERNAME OR EMAIL ADDRESS *</label>
        <input
          type="email"
          id="email"
          className={classes.input}
          onChange={changeHandler(setEmail)}
        />
        <label for="password">Password *</label>
        <input
          type={isShowPassword ? "text" : "password"}
          id="password"
          className={classes.input}
          onChange={changeHandler(setPassword)}
        />
        <button type="submit" className={classes.button2}>
          Login
        </button>
      </form>

      <div>
        <input
          type="checkbox"
          id="password"
          onChange={showPasswordHandler}
        ></input>
        <label for="password" className={classes.forgetPassword}>
          Show Password
        </label>
      </div>

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

Login.propTypes = {
  isAuthenticate: PropTypes.bool.isRequired,
  setIsAuthenticateConnect: PropTypes.func.isRequired,
  setUserDataConnect: PropTypes.func.isRequired,
  setNotificationMessageConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticate: state.app.isAuthenticate,
});

const mapDispatchToProps = {
  setIsAuthenticateConnect: setIsAuthenticate,
  setUserDataConnect: setUserData,
  setNotificationMessageConnect: setNotificationMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
