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
import { getSubCategories } from "../../utils/categoriesUtils";
import Loader from "../../components/common/Loader";
import { getAllProducts } from "../../utils/productsUtils";
const useStyles = makeStyles((theme) => ({
  shop: {
    padding: "80px 80px",
  },
  searchResults: {
    padding: "10px",
    whiteSpace: "nowrap",
  },
}));
const Shop = ({}) => {
  let errors = null;
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const resp = await getAllProducts();
      setProducts(resp.data.data);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return (
    <>
      <div className={classes.shop}>
        <PageBanner1 title={"Shop"} />
        <Grid container spacing={2} style={{ justifyContent: "spaceBetween" }}>
          <Grid item xs={6} sm={6}></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Typography className={classes.searchResults}>
              Showing 1-40 of 509 results
            </Typography>
            <Sorting />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ justifyContent: "center" }}>
          {loading ? (
            <Loader />
          ) : products?.length > 0 ? (
            products.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <ProductCard key={index} product={item} />
              </Grid>
            ))
          ) : (
            <h2>No products</h2>
          )}
        </Grid>
      </div>
    </>
  );
};

export default Shop;
