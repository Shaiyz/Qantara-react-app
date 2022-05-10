import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  setIsAuthenticate,
  setNotificationMessage,
  setUserData,
} from "../../lib/actions";
import {
  deleteAccessToken,
  getAccessToken,
  setAccessToken,
  toast,
} from "../../lib/helper";
import { checkState } from "../../utils/userUtils";

const RehydrateStore = ({
  children,
  setIsAuthenticateConnect,
  setUserDataConnect,
  setNotificationMessageConnect,
  goToRoute,
}) => {
  const fetchInitialData = async () => {

    if (!getAccessToken("token")) {
      setIsAuthenticateConnect(false);
      setUserDataConnect(null);
      goToRoute("/");
      return;
    }

    try {
      const resp = await checkState();
      setAccessToken(resp.data.token);
      setIsAuthenticateConnect(true);
      setUserDataConnect(resp.data.data);
    } catch (error) {
      deleteAccessToken();
      setIsAuthenticateConnect(false);
      setUserDataConnect(null);
      toast.error(
        setNotificationMessageConnect,
        error?.response?.data?.message || "Logout"
      );
      goToRoute("/");
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return <>{children}</>;
};

RehydrateStore.propTypes = {
  children: PropTypes.any.isRequired,
  setIsAuthenticateConnect: PropTypes.func.isRequired,
  setUserDataConnect: PropTypes.func.isRequired,
  setNotificationMessageConnect: PropTypes.func.isRequired,
  goToRoute: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setIsAuthenticateConnect: setIsAuthenticate,
  setUserDataConnect: setUserData,
  setNotificationMessageConnect: setNotificationMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(RehydrateStore);
