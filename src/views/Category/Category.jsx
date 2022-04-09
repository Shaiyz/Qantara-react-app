import React from "react";
import { PageBanner1 } from "../../components";
import { ProductCard, Sorting } from "../../components";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  shop: {
    padding: "80px 80px",
  },
  searchResults: {
    padding: "7px",
  },
}));
const Category = ({ products }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.shop}>
        <PageBanner1 title={"Category"} />
        <Grid container spacing={2} style={{ justifyContent: "spaceBetween" }}>
          <Grid item xs={6} sm={6}></Grid>
          <Grid
            item
            xs={6}
            sm={6}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Typography className={classes.searchResults}>
              Showing 1-40 of 509 results
            </Typography>
            <Sorting />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ justifyContent: "center" }}>
          {products?.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard key={index} product={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

Category.defaultProps = {
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

export default Category;
