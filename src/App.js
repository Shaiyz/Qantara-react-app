import { ThemeProvider } from "@material-ui/core";
import PropTypes from "prop-types";
import theme from "./theme";
import Routes from "./Routes";
import "./App.css";
import { setIsAuthenticate, setUserData } from "./lib/actions";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Toast from "./components/common/Toast";
import RehydrateStore from "./components/common/RehydrateStore";
import { useHistory } from "react-router-dom";

function App({
  setIsAuthenticateConnect,
  notificationObj,
  setUserDataConnect,
}) {
  const history = useHistory;

  const goToRoute = (link) => history.push(link);

  useEffect(() => {
    if (localStorage.getItem("userEmail")) {
      setIsAuthenticateConnect(true);
      setUserDataConnect({
        email: localStorage.getItem("userEmail"),
      });
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <RehydrateStore goToRoute={goToRoute}>
        <Routes />
        <Toast />
      </RehydrateStore>
    </ThemeProvider>
  );
}

App.propTypes = {
  isAuthenticate: PropTypes.bool.isRequired,
  setIsAuthenticateConnect: PropTypes.func.isRequired,
  notificationObj: PropTypes.object.isRequired,
  setUserDataConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticate: state.app.isAuthenticate,
  notificationObj: state.app.notificationObj,
});

const mapDispatchToProps = {
  setIsAuthenticateConnect: setIsAuthenticate,
  setUserDataConnect: setUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
