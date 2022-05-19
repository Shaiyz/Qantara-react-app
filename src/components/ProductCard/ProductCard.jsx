import { Button, makeStyles, Box, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    // border: `1px solid ${theme.palette.secondary.dark}`,
    textDecoration: "none",
    textAlign: "center",
    transition: "0.2s linear",
    "&:hover": {},
  },
  coverImg: {
    width: "100%",
    height: 250,
    objectFit: "contain",
  },
  imgContainer: {
    // width: "100%",
  },
  productTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "white",
    lineHeight: "24px",
    marginBottom: "10px",
  },
  infoBox: {
    fontSize: "18px",
    fontWeight: 400,
    display: "flex",
    justifyContent: "space-between",
  },
  SmallIcon: {
    width: 20,
    height: 20,
  },
  productPrice: {
    display: "flex",
    justifyContent: "start",
    padding: "5px 0px",
    "&:hover": {},
  },
}));

function ProductCard({ product, isShowAddToCartBtn }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {product && (
        <Link
          to={`/product/${product._id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Box className={classes.imgContainer}>
            <img
              src={product.product_images[0].image}
              className={classes.coverImg}
            />
          </Box>
        </Link>
      )}
      <h2 className={classes.productTitle}>{product.product_name}</h2>
      <Box className={classes.infoBox}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/product/${product.product_name}`}
        >
          {product.product_name}
        </Link>
        <FavoriteBorderIcon className={classes.SmallIcon} />
      </Box>
      {!isShowAddToCartBtn ? (
        <Typography variant="subtitle1" className={classes.productPrice}>
          {product.product_price.toFixed(2)}
        </Typography>
      ) : (
        <div className="add_to_cart_btn" >Add to cart</div>
      )}
    </div>
  );
}

export default ProductCard;
