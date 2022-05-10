import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

const ShippingAddress = ({ onBackHandler }) => {
  return (
    <div>
      <h3>Shipping Address</h3>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <label className="textLabel">FIRST NAME*</label>
            <input type="text" className="textField" required />
          </Grid>
          <Grid item xs={12} md={6}>
            <label className="textLabel">LAST NAME*</label>
            <input type="text" className="textField" required />
          </Grid>
          <Grid item xs={12} md={12}>
            <label className="textLabel">COMPANY NAME (OPTIONAL)</label>
            <input type="text" className="textField" required />
          </Grid>
          <Grid item xs={12} md={12}>
            <label className="textLabel">COUNTRY / REGION*</label>
            <select name="" id="" className="textField">
              <option value="">Select a country/region ...</option>
              {[
                "Bharain",
                "Kuwait",
                "Oman",
                "Saudi Arabia",
                "United Arab Emirates",
              ].map((e) => (
                <option value={e.toLowerCase()}>{e}</option>
              ))}
            </select>
          </Grid>
          <Grid item xs={12} md={12}>
            <label className="textLabel">STREET ADDRESS *</label>
            <input
              type="text"
              className="textField"
              placeholder="House number and street name"
              required
            />
            <input
              type="text"
              className="textField"
              placeholder="Apartment, suite, unit, etc. (optional)"
              required
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <label className="textLabel">TOWN / CITY *</label>
            <input
              type="text"
              className="textField"
              required
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <label className="textLabel">STATE / COUNTY *</label>
            <input
              type="text"
              className="textField"
              required
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <label className="textLabel">POSTCODE / ZIP *</label>
            <input
              type="text"
              className="textField"
              required
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <label className="textLabel">PHONE (OPTIONAL) *</label>
            <input
              type="text"
              className="textField"
              required
            />
          </Grid>
        </Grid>

        <button type="submit" className="submit_btn">
          Save changes
        </button>
        <button onClick={onBackHandler} className="submit_btn">
          Back
        </button>
      </form>
    </div>
  );
};

ShippingAddress.propTypes = {
  onBackHandler: PropTypes.func.isRequired,
};

export default ShippingAddress;
