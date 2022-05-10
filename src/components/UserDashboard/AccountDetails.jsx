import { TextField, Grid, Container } from "@material-ui/core";
import { Label } from "@material-ui/icons";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";

const AccountDetails = ({ userData }) => {
  const [firstName, setFirstName] = useState(userData?.user?.first_name || "");
  const [lastName, setLastName] = useState(userData?.user?.last_name || "");
  const [email, setEmail] = useState(userData?.user?.email || "");

  const _submit = (e) => {
    e.preventDefault();
    alert("working .. ");
  };

  return (
    <div className="account_details">
      <form onSubmit={_submit} className="account_details-form">
        {/* <div className="twoFields">
          <div>
            <label>First Name *</label>
            <input type="text" className="textField" required />
          </div>
          <div>
            <label>Last Name *</label>
            <input type="text" className="textField" required />
          </div>
        </div>

        <div className="form-wrapper">
          <label>Display name *</label>
          <input type="text" className="textField" required />
        </div> */}

        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <label className="textLabel">FIRST NAME*</label>
              <input
                type="text"
                className="textField"
                value={firstName}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label className="textLabel">LAST NAME*</label>
              <input
                type="text"
                className="textField"
                value={lastName}
                required
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <label className="textLabel">DISPLAY NAME*</label>
              <input
                type="text"
                className="textField"
                required
                value={lastName ? `${firstName} ${lastName}` : firstName}
              />
              <label className="textLabel">
                <i>
                  This will be how your name will be displayed in the account
                  section and in reviews
                </i>
              </label>
            </Grid>
            <Grid item xs={12} md={12}>
              <label className="textLabel">EMAIL ADDRESS*</label>
              <input
                type="text"
                className="textField"
                required
                value={email}
                disabled
              />
            </Grid>

            <h1>Password change</h1>

            <Grid item xs={12} md={12}>
              <label className="textLabel">
                CURRENT PASSWORD (LEAVE BLANK TO LEAVE UNCHANGED)
              </label>
              <input type="text" className="textField" required />
            </Grid>
            <Grid item xs={12} md={12}>
              <label className="textLabel">
                NEW PASSWORD (LEAVE BLANK TO LEAVE UNCHANGED)
              </label>
              <input type="text" className="textField" required />
            </Grid>
            <Grid item xs={12} md={12}>
              <label className="textLabel">CONFIRM NEW PASSWORD</label>
              <input type="text" className="textField" required />
            </Grid>

            <Grid item xs={12} md={12}>
              <button type="submit" className="submit_btn">
                Save changes
              </button>
            </Grid>
          </Grid>
        </Container>
      </form>
    </div>
  );
};

AccountDetails.propTypes = {
  userData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.app.userData,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);
