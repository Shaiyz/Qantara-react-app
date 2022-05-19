import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { getSubCategories } from "../../utils/categoriesUtils";
import { getProductSubCategory } from "../../utils/productsUtils";
const useStyles = makeStyles((theme) => ({
  shop: {
    padding: "80px 80px",
  },
  searchResults: {
    padding: "10px",
  },
}));

const Subcategory = () => {
  const classes = useStyles();
  const params = useParams();
  const { subId, catId } = params;

  const [products, setProducts] = useState(null);

  const fetchInitialData = async () => {
    try {
      // const resp = await getSubCategories(subId);
      const resp = await getProductSubCategory(subId);
      setProducts(resp.data.data);
    } catch (error) {
      console.log(error?.response?.data?.message || error);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, [subId]);

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <div className={classes.shop}>
      <PageBanner1 title={catId} />
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
        {products?.length > 0 ? (
          products?.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard key={index} product={item} />
            </Grid>
          ))
        ) : (
          <h1>No Products</h1>
        )}
      </Grid>
    </div>
  );
};

// Subcategory.defaultProps = {
//   products: [
//     {
//       product_name: "Kintsugi",
//       quantity: 2,
//       product_price: 399,
//       product_images: [
//         {
//           img: "/assets/images/test.jpg",
//         },
//         {
//           img: "/assets/images/logo2.png",
//         },
//       ],
//     },
//     {
//       product_name: "Kintsugi",
//       quantity: 2,
//       product_price: 399,
//       product_images: [
//         {
//           img: "/assets/images/logo1.png",
//         },
//         {
//           img: "/assets/images/logo2.png",
//         },
//       ],
//     },
//     {
//       product_name: "Plate",
//       quantity: 3,
//       product_price: 499,
//       product_images: [
//         {
//           img: "assets/images/logo1.png",
//         },
//         {
//           img: "assets/images/logo2.png",
//         },
//       ],
//     },
//     {
//       product_name: "Kintsugi",
//       quantity: 2,
//       product_price: 399,
//       product_images: [
//         {
//           img: "assets/images/logo1.png",
//         },
//         {
//           img: "assets/images/logo2.png",
//         },
//       ],
//     },
//     {
//       product_name: "Kintsugi",
//       quantity: 2,
//       product_price: 399,
//       product_images: [
//         {
//           img: "assets/images/logo1.png",
//         },
//         {
//           img: "assets/images/logo2.png",
//         },
//       ],
//     },
//     {
//       product_name: "Kintsugi",
//       quantity: 2,
//       product_price: 399,
//       product_images: [
//         {
//           img: "assets/images/logo1.png",
//         },
//         {
//           img: "assets/images/logo2.png",
//         },
//       ],
//     },
//   ],
// };

export default Subcategory;
