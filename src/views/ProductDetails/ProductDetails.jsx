import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
    marginTop: "10%",
  },
  productImage: {
    width: "80%",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  form: {
    marginTop: "15px",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
  },
  quantity: {
    display: "inline-flex",
    position: "relative",
    paddingRight: "22px",
  },
  minus: {
    display: "flex",
    padding: "0",
    margin: "0",
    outline: "0",
    border: "1px solid #151515",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "23px",
    height: "22px",
    overflow: "visible",
    textDecoration: "none",
    fontWeight: "400",
    cursor: "pointer",
    textShadow: "none",
    background: "transparent",
    color: "#151515",
    borderRadius: " 0",
    marginLeft: "53px",
  },
  input: {
    display: "inline-flex",
    padding: "0",
    width: "51px",
    height: "46px",
    lineHeight: "46px",
    textAlign: "center",
    border: " 1px solid #151515",
    justifyContent: "center",
    background: "transparent",
    fontSize: "16px",
    fontWeight: " 400",
    color: "#151515",
    margin: "0",
    outline: "0",
    appearance: "none",
  },

  plus: {
    display: "flex",
    padding: "0",
    margin: "0",
    outline: "0",
    border: "1px solid #151515",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: "23px",
    height: "22px",
    overflow: "visible",
    textDecoration: "none",
    fontWeight: "400",
    cursor: "pointer",
    textShadow: "none",
    background: "transparent",
    color: "#151515",
    borderRadius: " 0",
    marginLeft: "53px",
    top: "-24px",
  },
  button: {
    backgroundColor: "white",
    padding: "13px 50px",
    width: "100%",
    border: "1px solid black",
    color: "black",
    fontSize: "18px",
    marginLeft: "15%",
    "&:hover": {
      opacity: "0.9",
      backgroundColor: "black",
      color: "White",
    },
  },
}));

const ProductDetails = () => {
  const classes = useStyles();

  const [{ loading, errors, product }, setState] = useState({
    loading: false,
    errors: null,
    product: {
      sku: "1",
      product_name: "“GOLD LEAF MINI GLASS TRAY-METAL RIM-RE/L”",
      product_price: "120",
    },
  });

  // if (loading) {
  //   return (
  //     <div
  //       style={{
  //         height: "80vh",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <CircularProgress size={72} />
  //     </div>
  //   );
  // }

  // if (errors) {
  //   return (
  //     <div
  //       style={{
  //         height: "80vh",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Alert variant="error">{errors}</Alert>
  //     </div>
  //   );
  // }

  if (!product) {
    return null;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className={classes.section}>
        <Container>
          <Grid container justifyContent="center" spacing={5}>
            <Grid item xs={12} sm={12} lg={6}>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <img
                  src="/assets/images/test.jpg"
                  className={classes.productImage}
                  alt={product.sku}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Typography variant="h5">{product.product_name}</Typography>
              <Typography variant="h5">{product.product_price}</Typography>
              <Typography
                variant="subtitle1"
                style={{ marginTop: "20px", fontSize: "16px", opacity: "0.7" }}
              >
                5 IN STOCK
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <div>
                  <div className={classes.minus}>-</div>
                  <input className={classes.input} />

                  <div className={classes.plus}>+</div>
                </div>
                <div>
                  <button type="submit" className={classes.button}>
                    Add to Cart
                  </button>
                </div>
              </form>
              <Box></Box>
              <Typography
                variant="subtitle1"
                style={{ marginTop: "20px", fontSize: "16px", opacity: "0.7" }}
              >
                SKU:{product.sku}
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ marginTop: "20px", fontSize: "16px", opacity: "0.7" }}
              >
                <strong>CATEGORIES:</strong> Categories
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
