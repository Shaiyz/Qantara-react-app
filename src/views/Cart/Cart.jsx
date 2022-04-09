import {
  makeStyles,
  Container,
  List,
  ListItem,
  CardMedia,
  Box,
  Typography,
  Grid,
} from "@material-ui/core";
import * as React from "react";
import { Link } from "react-router-dom";
import { PageBanner1 } from "../../components";
import CartList from "./CartList";

const useStyles = makeStyles((theme) => ({
  searchBox: {
    padding: "0 16px",
    marginLeft: "2%",
    height: "42px",
    lineHeight: "42px",
    border: "1px solid #e5e5e5",
    color: " #737373",
    boxSizing: "border-box",
    width: "85%",
    marginTop: "5%",
  },
  applyCoupon: {
    padding: "0 16px",
    marginLeft: "2%",
    height: "42px",
    lineHeight: "42px",
    border: "1px solid #e5e5e5",
    color: " #737373",
    width: "20%",
    marginTop: "5%",
  },
  subTotal: {
    borderBottom: "1px solid #eaeaea",
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "space-between",
    padding: "25px",
    width: "50%",
  },
  Total: {
    borderTop: "1px solid #eaeaea",
    display: "flex",
    justifyContent: "space-between",
    padding: "25px",
    width: "50%",
  },
  button2: {
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    padding: "15px",
    width: "50%",
    border: "1px solid ",
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
  button: {
    backgroundColor: "black",
    padding: "15px",
    width: "85%",
    border: "1px solid ",
    color: "white",
    fontSize: 16,
    marginTop: "5%",
    boxSizing: "border-box",

    cursor: "pointer",
    "&:hover": {
      opacity: "0.6",
    },
  },
}));

const Cart = ({ products }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [country, setCountry] = React.useState("");

  return (
    <section className={classes.CartPage}>
      <PageBanner1 title={"Shopping Cart"} />
      <Container maxWidth={false}>
        <CartList products={products} />
        <div>
          <input className={classes.applyCoupon} placeholder="Coupon Code" />
        </div>
        <Grid xs={12} sm={12} lg={12}>
          <Grid item style={{ display: "flex", justifyContent: "end" }}>
            <div className={classes.subTotal}>
              <Typography variant="h6">
                <strong>Subtotal:</strong>
              </Typography>
              <Typography variant="subtitle1">
                <strong>100</strong>
              </Typography>
            </div>
          </Grid>
          <Grid item style={{ display: "flex", justifyContent: "end" }}>
            <div className={classes.Total}>
              <div>
                <Typography variant="h6">
                  <strong>Shipping:</strong>
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle1">
                  No shipping options were found for default.
                </Typography>
                <Typography
                  variant="button"
                  style={{ textAlign: "right", cursor: "pointer" }}
                  onClick={() => setOpen(!open)}
                >
                  Enter a different address
                </Typography>
                {open == true && (
                  <>
                    <div>
                      <select
                        name="country"
                        id="country"
                        required
                        className={classes.searchBox}
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
                          <input
                            type="text"
                            placeholder="State/County"
                            required
                            className={classes.searchBox}
                          />
                        </div>
                      )}
                      <div>
                        <input
                          type="text"
                          placeholder="Town/City"
                          required
                          className={classes.searchBox}
                        />
                      </div>
                      {country !== "UAE" && (
                        <div>
                          <input
                            type="text"
                            placeholder="Postcode/Zip"
                            required
                            className={classes.searchBox}
                          />
                        </div>
                      )}
                      <div>
                        <button className={classes.button}>Update</button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Grid>
          <Grid item style={{ display: "flex", justifyContent: "end" }}>
            <div className={classes.Total}>
              <Typography variant="h6">
                <strong>Total:</strong>
              </Typography>
              <Typography variant="subtitle1">
                <strong>1400</strong>
              </Typography>
            </div>
          </Grid>
          <Grid item style={{ display: "flex", justifyContent: "end" }}>
            <Link to='/checkout' className={classes.button2}>Proceed to checkout</Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

Cart.defaultProps = {
  products: [
    {
      product_name: "Kintsugi",
      quantity: 2,
      product_price: 399,
      product_images: [
        {
          img: "assets/images/test.jpg",
        },
        {
          img: "assets/images/logo2.png",
        },
      ],
    },
    {
      product_name: "Kintsugi",
      quantity: 2,
      product_price: 399,
      product_images: [
        {
          img: "assets/images/logo1.png",
        },
        {
          img: "assets/images/logo2.png",
        },
      ],
    },
    {
      product_name: "Plate",
      quantity: 3,
      product_price: 499,
      product_images: [
        {
          img: "assets/images/logo1.png",
        },
        {
          img: "assets/images/logo2.png",
        },
      ],
    },
    {
      product_name: "Kintsugi",
      quantity: 2,
      product_price: 399,
      product_images: [
        {
          img: "assets/images/logo1.png",
        },
        {
          img: "assets/images/logo2.png",
        },
      ],
    },
    {
      product_name: "Kintsugi",
      quantity: 2,
      product_price: 399,
      product_images: [
        {
          img: "assets/images/logo1.png",
        },
        {
          img: "assets/images/logo2.png",
        },
      ],
    },
    {
      product_name: "Kintsugi",
      quantity: 2,
      product_price: 399,
      product_images: [
        {
          img: "assets/images/logo1.png",
        },
        {
          img: "assets/images/logo2.png",
        },
      ],
    },
  ],
};

export default Cart;
