import {
  Grid,
  Typography,
  List,
  ListItem,
  CardMedia,
  Box,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";

const CartList = ({ products }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.rootWeb}>
        <div className={classes.columnList}>
          <Grid container className={classes.columns}>
            <Grid lg={5} md={5} align="center">
              <Typography variant="subtitle2">Product</Typography>
            </Grid>
            <Grid lg={2} md={2}>
              <Typography variant="subtitle2">Price</Typography>
            </Grid>

            <Grid lg={2} md={2}>
              <Typography variant="subtitle2">Quantity</Typography>
            </Grid>

            <Grid lg={2} md={2}>
              <Typography variant="subtitle2">Subtotal</Typography>
            </Grid>
          </Grid>
        </div>
        <List>
          {products.map((item, ind) => (
            <ListItem className={classes.cartList}>
              <Grid container>
                <Grid
                  lg={5}
                  md={5}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Close className={classes.extraSmallIcon} />
                  <CardMedia
                    component="img"
                    style={{ width: "100px", marginLeft: "30px" }}
                    image={item.product_images[0].img}
                    alt="Product image"
                  />
                  <Link
                    className={classes.productName}
                    to={`/product/${item._id}`}
                  >
                    <Typography variant="h6" style={{ padding: "0 30px" }}>
                      {item.product_name}
                    </Typography>
                  </Link>
                </Grid>
                <Grid
                  lg={2}
                  md={2}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1" color="text.secondary">
                    {item.product_price}
                  </Typography>
                </Grid>
                <Grid
                  lg={2}
                  md={2}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1" color="text.secondary">
                    <div>
                      <div className={classes.minus}>-</div>
                      <input className={classes.input} value={item?.quantity} />

                      <div className={classes.plus}>+</div>
                    </div>
                  </Typography>
                </Grid>
                <Grid
                  lg={2}
                  md={2}
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1" color="text.secondary">
                    {item.quantity * item.product_price}
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      </div>

      <div className={classes.rootMobile}>
        <Grid container>
          {products.map((product, index) => (
            <>
              <Grid item xs={12} sm={12} className={classes.imgContainer}>
                <img src="/assets/images/test.jpg" style={{ width: "20%" }} />
                <Close className={classes.removeIcon} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography varaint="h6">Product:</Typography>
                <Typography>{product.product_name}</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography varaint="h6">Price:</Typography>
                <Typography>{product.product_price}</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography varaint="h6">Quantity:</Typography>
                <div>
                  <div className={classes.minus}>-</div>
                  <input className={classes.input} />

                  <div className={classes.plus}>+</div>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography varaint="h6">Subtotal:</Typography>
                <Typography>
                  {product?.quantity * product.product_price}
                </Typography>
              </Grid>
            </>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default CartList;

const useStyles = makeStyles((theme) => ({
  rootWeb: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rootMobile: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "50px 0",
    borderTop: "1px solid #eaeaea",
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
  extraSmallIcon: {
    width: 18,
    height: 10,
    cursor: "pointer",
    marginLeft: "30px",
  },
  removeIcon: {
    width: 18,
    height: 12,
    cursor: "pointer",
  },
  columns: {
    padding: "25px",
  },
  columnList: {
    borderBottom: "1px solid #eaeaea",
    borderTop: "1px solid #eaeaea",
  },
  productName: {
    textDecoration: "none",
    color: "black",
  },
  cartList: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
}));
