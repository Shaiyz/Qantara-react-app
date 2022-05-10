import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import {
  setIsAuthenticate,
  setNotificationMessage,
  setUserData,
} from "../../../lib/actions";
import { createCustomer } from "../../../utils/userUtils";
import { toast } from "../../../lib/helper";

const useStyle = makeStyles((theme) => ({
  loginSec: {
    padding: "70px 0",
    width: "100%",
    height: "100vh",
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

const Register = ({
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

  const _submit = async () => {
    if (!isFieldsValid()) {
      const elem = document.getElementById("email");
      elem.focus();
      return;
    }

    try {
      const createCustomerObj = {
        email,
        password,
      };

      const resp = await createCustomer(createCustomerObj);
      toast.success(setNotificationMessageConnect, "Successfully created");
      history.push("login");
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
      <form className={classes.form}>
        <label for="email">EMAIL ADDRESS *</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          className={classes.input}
        />
        <label for="password">PASSWORD*</label>
        <input
          type={isShowPassword ? "text" : "password"}
          name="password"
          id="password"
          className={classes.input}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete
        />
      </form>

      <div className={classes.remmember}>
        <div>
          <input
            type="checkbox"
            id="showPassword"
            onChange={showPasswordHandler}
          />
          <label for="remember" className={classes.forgetPassword}>
            SHOW PASSWORD
          </label>
        </div>
      </div>

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
        <button onClick={_submit} className={classes.button2}>
          Register
        </button>
      </div>
    </section>
  );
};

Register.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
