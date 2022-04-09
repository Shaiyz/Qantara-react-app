import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PageBanner1 } from "../../components";
import { Address, LoginScreen } from "./components";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 70px",
  },
  subTotal: {
    borderBottom: "1px solid #eaeaea",
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    width: "100%",
  },
  productList: {
    borderBottom: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    width: "100%",
    marginTop: "2%",
  },
  form: {
    "& label": {
      display: "block",
      marginTop: "1%",
    },
    "& input": {
      display: "block",
    },
  },
  button2: {
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    padding: "15px",
    width: "100%",
    border: "1px solid ",
    marginTop: "2%",
    boxSizing: "border-box",
    textDecoration: "none",
    textAlign: "center",
    color: "black",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  textArea: {
    padding: "0 26px",
    height: "92px",
    lineHeight: "62px",
    border: "1px solid #eaeaea",
    color: " #737373",
    boxSizing: "border-box",
    width: "95%",
    marginTop: "2%",
  },
}));

const Checkout = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [shipping, setShipping] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PageBanner1 title={"Checkout"} />
      <Grid container xs={12} sm={12} lg={12} justifyContent="center">
        <Typography variant="h6">Returning customer? &nbsp;</Typography>
        <Typography
          variant="h6"
          style={{ fontWeight: 500, fontSize: "20px", cursor: "pointer" }}
          onClick={() => {
            setOpenLogin(!openLogin);
          }}
        >
          Click here to login
        </Typography>
        {openLogin && <LoginScreen></LoginScreen>}
      </Grid>
      <Grid container xs={12} sm={12} lg={12} justifyContent="center">
        <Typography variant="h6">Have a coupon? &nbsp;</Typography>
        <Typography variant="h6" style={{ fontWeight: 500, fontSize: "20px" }}>
          Click here to enter your code
        </Typography>
      </Grid>
      <br />
      <br />

      <Grid container justifyContent="space-between">
        <Grid item xs={12} md={12} lg={7} style={{ marginTop: "10%" }}>
          <Typography variant="h5">Billing details</Typography>
          <form className={classes.form}>
            <Address />
            <div style={{ display: "flex", margin: "14px 4px" }}>
              <input type="checkbox" />
              <Typography>SUBSCRIBE TO OUR NEWS LETTER</Typography>
            </div>
            <div style={{ display: "flex", margin: "14px 4px" }}>
              <input type="checkbox" />
              <Typography>CREATE AN ACCOUNT</Typography>
            </div>
            <div style={{ display: "flex", margin: "24px 4px" }}>
              <input
                type="checkbox"
                onChange={(e) => setShipping(e.target.checked)}
              />
              <Typography>SHIP TO A DIFFERENT ADDRESS</Typography>
            </div>
            {shipping == true && <Address />}
            <div style={{ width: "100%", marginTop: "10%" }}>
              <label>ORDER NOTES(OPTIONAL)</label>
              <textarea
                name="country"
                placeholder="Notes for your order, e.g. special notes for delivery"
                className={classes.textArea}
              />
            </div>
          </form>
        </Grid>
        <Grid item xs={12} md={12} lg={4} style={{ marginTop: "10%" }}>
          <Typography variant="h5">Your order</Typography>
          <Grid item style={{ marginTop: "5%" }}>
            <div className={classes.subTotal}>
              <Typography variant="subtitle1">Subtotal</Typography>
              <Typography variant="subtitle1">Product</Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.productList}>
              <Typography variant="h6">product name</Typography>
              <Typography variant="subtitle1">product price</Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.subTotal}>
              <Typography variant="h6">Subtotal</Typography>
              <Typography variant="subtitle1">total product price</Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.productList}>
              <Typography variant="h6">Shipping</Typography>
              <Typography variant="subtitle1">Shipping price</Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.productList}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="subtitle1">Total price</Typography>
            </div>
          </Grid>
          <Grid item align="right" style={{ marginTop: "5%" }}>
            <Typography variant="subtitle2">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </Typography>
          </Grid>
          <div>
            <input type="checkbox" />
            <label>
              I HAVE READ AND AGREE TO THE WEBSITE &nbsp;
              <Link to="/terms" style={{ color: "black" }}>
                TERMS AND CONDITIONS
              </Link>
            </label>
          </div>
          <button className={classes.button2}>Place order</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Checkout;
