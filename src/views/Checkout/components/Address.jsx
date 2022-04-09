import { makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  textField: {
    padding: "0 16px",
    height: "52px",
    lineHeight: "42px",
    border: "1px solid #e76049",
    color: " #737373",
    boxSizing: "border-box",
    width: "90%",
    marginTop: "2%",
  },
  textField1: {
    padding: "0 16px",
    height: "52px",
    lineHeight: "42px",
    border: "1px solid #eaeaea",
    color: " #737373",
    boxSizing: "border-box",
    width: "95%",
    marginTop: "2%",
  },
}));
const Address = () => {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <div style={{ width: "100%" }}>
          <label>First Name*</label>
          <input name="first_name" type="text" className={classes.textField} />
        </div>
        <div style={{ width: "100%", marignLeft: "10%" }}>
          <label>Last Name*</label>
          <input name="last_name" type="text" className={classes.textField} />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <label>COMPANY NAME(OPTIONAL)</label>
        <input name="company_name" type="text" className={classes.textField1} />
      </div>
      <div>
        <label>Country / Region</label>

        <select
          name="country"
          id="country"
          required
          className={classes.textField1}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select a country/region</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Oman">Oman</option>
          <option value="KSA">Saudia Arabia</option>
          <option value="UAE">United Arab Emirates</option>
        </select>
      </div>
      <div>
        {country === "Kuwait" || country === "Bahrain" ? (
          <></>
        ) : (
          <div>
            <label>State / County</label>

            <input type="text" required className={classes.textField1} />
          </div>
        )}
        <div>
          <label>Town / City</label>

          <input type="text" required className={classes.textField1} />
        </div>
        {country !== "UAE" && (
          <div style={{ width: "100%" }}>
            <label>POSTCODE / ZIP</label>
            <input name="zip" type="text" className={classes.textField1} />
          </div>
        )}
      </div>

      <div style={{ width: "100%" }}>
        <label>STREET ADDRESS</label>
        <input
          name="country"
          type="text"
          className={classes.textField1}
          placeholder="House No# and Street Name"
        />
        <input
          name="country"
          type="text"
          className={classes.textField1}
          placeholder="Apartment, suite, unit,etc. (optional)"
        />
      </div>

      <div style={{ width: "100%" }}>
        <label>PHONE</label>
        <input name="phone" type="text" className={classes.textField1} />
      </div>
      <div style={{ width: "100%" }}>
        <label>EMAIL ADDRESS</label>
        <input name="country" type="text" className={classes.textField1} />
      </div>
    </>
  );
};

export default Address;
