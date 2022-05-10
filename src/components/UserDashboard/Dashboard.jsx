import React, { useState } from "react";
import { Container, Grid, Item } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  renderDownloadIcon,
  renderOrderIcon,
  renderAddressIcon,
  renderAccountIcon,
  renderLogoutIcon,
} from "./DashboardIcons";
import { setIsAuthenticate, setNotificationMessage } from "../../lib/actions";
import { useHistory } from "react-router-dom";
import AccountDetails from "./AccountDetails";
import BillingAddress from "./BillingAddress";
import ShippingAddress from "./ShippingAddress";
import { toast } from "../../lib/helper";

const Dashboard = ({
  isAuthenticate,
  setNotificationMessageConnect,
  setIsAuthenticateConnect,
  userData,
}) => {
  const history = useHistory();
  const [selectedBox, setSelectedBox] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  const afterSelectingBox = (boxName) => {
    switch (boxName) {
      case "Logout":
        setIsAuthenticateConnect(false);
        localStorage.removeItem("token");
        toast.success(setNotificationMessageConnect, "Logout successfully");
        history.push("/");
        break;
      case "Order":
        toast.alert(
          setNotificationMessageConnect,
          "No order has been made yet."
        );

        break;
      case "Download":
        toast.alert(
          setNotificationMessageConnect,
          "No downloads available yet."
        );
        break;

      case "Addresses":
        return null;

      case "Account details":
        return null;

      default:
        toast.alert(setNotificationMessageConnect, "");
        break;
    }
  };

  const boxHandler = (boxName) => {
    setSelectedBox(boxName);
    afterSelectingBox(boxName);
    setSelectedAddress("");
  };

  console.log(userData);
  return (
    <section className="dashboard" style={{ marginTop: "8rem" }}>
      <div className="user_dashboard">
        {[
          ["Order", renderOrderIcon()],
          ["Download", renderDownloadIcon()],
          ["Addresses", renderAddressIcon()],
          ["Account details", renderAccountIcon()],
          ["Logout", renderLogoutIcon()],
        ].map((e) => (
          <div
            className={`boxCard ${selectedBox === e[0] && "selectedBox"}`}
            onClick={() => boxHandler(e[0])}
          >
            {e[1]}
            <h1 className="boxHeading">{e[0]}</h1>
          </div>
        ))}
      </div>

      {selectedBox === "Account details" && <AccountDetails />}
      {selectedBox === "Addresses" && (
        <>
          <Container>
            <h5>
              The following addresses will be used on the checkout page by
              default.
            </h5>

            <Grid container spacing={2}>
              {!selectedAddress &&
                ["Billing address", "Shipping address"].map((e) => (
                  <Grid item xs={12} md={6}>
                    <h1 className="address_title">{e}</h1>
                    <button
                      className="address_btn"
                      onClick={() => {
                        setSelectedAddress(e);
                      }}
                    >
                      Add
                    </button>
                    <p className="address_note">
                      <i> you have not set up this type of address yet. </i>
                    </p>
                  </Grid>
                ))}
            </Grid>
            {selectedAddress === "Billing address" && (
              <BillingAddress
                onBackHandler={() => {
                  setSelectedAddress("");
                }}
              />
            )}
            {selectedAddress === "Shipping address" && (
              <ShippingAddress
                onBackHandler={() => {
                  setSelectedAddress("");
                }}
              />
            )}
          </Container>
        </>
      )}

      {!selectedBox && (
        <Container>
          <div className="not_selected_box">
            <p>
              Hello <b>{userData?.user?.email.split("@")[0]}</b> (not{" "}
              <b>{userData?.user?.email.split("@")[0]}?</b>{" "}
              <span onClick={() => boxHandler("Logout")}>Log out</span>)
            </p>
            <p>
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
          </div>
        </Container>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  isAuthenticate: PropTypes.bool.isRequired,
  setNotificationMessageConnect: PropTypes.func.isRequired,
  setIsAuthenticateConnect: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticate: state.app.isAuthenticate,
  userData: state.app.userData,
});

const mapDispatchToProps = {
  setNotificationMessageConnect: setNotificationMessage,
  setIsAuthenticateConnect: setIsAuthenticate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
