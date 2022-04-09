import React from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ProductCard from "../ProductCard";

const RecommendedProducts = ({ size, products }) => {
  const useStyles = makeStyles((theme) => ({
    bannerSubHeading: {
      fontSize: "34px",
      fontWeight: 450,
      marginTop: "50px",
      textAlign: "center",
      maxWidth: "100%",
      color: "#151515",
    },
  }));
  let errors = null;
  const classes = useStyles();
  return (
    <>
      <Container style={{ marginTop: "60px", marginBottom: "60px" }}>
        <h2 className={classes.bannerSubHeading}>Items You Will Love</h2>

        {products?.length > 0 ? (
          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            {products.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <ProductCard product={item} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box>
            {errors ? (
              <Box textAlign="center">
                <Typography varaint="subtitle2" color="error">
                  {errors}
                </Typography>
              </Box>
            ) : (
              <></>
              //   <Skeleton animation="wave" />
            )}
          </Box>
        )}
      </Container>
    </>
  );
};

RecommendedProducts.defaultProps = {
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

export default RecommendedProducts;
