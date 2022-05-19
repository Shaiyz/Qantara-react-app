import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ProductCard from "../ProductCard";
import Loader from "../common/Loader";

const RecommendedProducts = ({ size, products, loading }) => {
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
  const [isShowAddCartBtn, setIsShowAddCartBtn] = useState(
    [...Array(products?.length)].fill(false)
  );

  const onMouseOverHandler = (index) => {
    const [...rest] = isShowAddCartBtn;
    rest[index] = true;
    setIsShowAddCartBtn(rest);
  };
  const onMouseLeaveHandler = (index) => {
    const [...rest] = isShowAddCartBtn;
    rest[index] = false;
    setIsShowAddCartBtn(rest);
  };

  return (
    <>
      <Container style={{ marginTop: "60px", marginBottom: "60px" }}>
        <h2 className={classes.bannerSubHeading}>Items You Will Love</h2>
        {loading ? (
          <Loader />
        ) : products?.length > 0 ? (
          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            {products.map((item, index) => (
              <Grid
                onMouseOver={() => {
                  onMouseOverHandler(index);
                }}
                onMouseLeave={() => {
                  onMouseLeaveHandler(index);
                }}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
              >
                <ProductCard
                  product={item}
                  isShowAddToCartBtn={isShowAddCartBtn[index]}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
            <h2>No Products</h2>
          </>
        )}
      </Container>
    </>
  );
};

export default RecommendedProducts;
