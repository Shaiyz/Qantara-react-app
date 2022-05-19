import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { setIsCartUpdate, setNotificationMessage } from "../../lib/actions";
import { getAllProducts } from "../../utils/productsUtils";
import { connect, useDispatch, useSelector } from "react-redux";
import { toast } from "../../lib/helper";
import Loader from "../../components/common/Loader";

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
    marginTop: "1.5rem",
    // marginBottom: "20px",
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

const ProductDetails = ({
  setNotificationMessageConnect,
  setIsCartUpdateConnect,
}) => {
  const classes = useStyles();
  const params = useParams();
  const isCartUpdate = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const { productID } = params;

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);

  const addQuantity = () => setQuantity(quantity + 1);

  const minusQuantity = () => {
    if (quantity === 0) {
      toast.error(setNotificationMessageConnect, "Quantity cannot be in minus");
      setQuantity(0);
      return;
    }
    setQuantity(quantity - 1);
  };

  const addToCartHandler = () => {
    if (window.localStorage.getItem("cart")) {
      const cartList = JSON.parse(window.localStorage.getItem("cart"));

      const isProductExistInCart = cartList.find(
        (x) => x.productID === productID
      );

      if (isProductExistInCart) {
        cartList[
          cartList.indexOf(cartList.find((x) => x.productID === productID))
        ] = {
          quantity,
          productID,
        };
      } else {
        cartList.push({
          quantity,
          productID,
        });
      }
      window.localStorage.setItem("cart", JSON.stringify(cartList));
    } else {
      const cartList = [
        {
          quantity,
          productID,
        },
      ];
      window.localStorage.setItem("cart", JSON.stringify(cartList));
    }

    setIsCartUpdateConnect(true);
  };

  const isCartHasSomething = () => {
    if (window.localStorage.getItem("cart")) {
      const cartList = JSON.parse(window.localStorage.getItem("cart"));

      const isProductExistInCart = cartList.find(
        (x) => x.productID === productID
      );

      if (isProductExistInCart) {
        return Number(isProductExistInCart?.quantity);
      }

      return 0;
    } else {
      return 0;
    }
  };

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const resp = await getAllProducts(productID);
      const quantity = await isCartHasSomething();
      setProduct(resp.data.data[0]);
      setQuantity(quantity);
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem("cart")) {
      const cartList = JSON.parse(window.localStorage.getItem("cart"));

      const isProductExistInCart = cartList.find(
        (x) => x.productID === productID
      );

      setQuantity(
        isProductExistInCart ? Number(isProductExistInCart?.quantity) : 0
      );
    } else {
      setQuantity(0);
    }
  }, [isCartUpdate]);

  useEffect(() => {
    fetchInitialData();
  }, []);

  if (!product) {
    return null;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (loading) return <Loader height={"60vh"} />;

  return (
    <section className={classes.section}>
      <Container>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item xs={12} sm={12} lg={6}>
            <div style={{ justifyContent: "center", display: "flex" }}>
              <img
                src={
                  product?.product_images?.length > 0
                    ? product?.product_images[0]?.image
                    : "/assets/images/test.jpg"
                }
                className={classes.productImage}
                alt={product.sku}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Typography variant="h5" style={{ textTransform: "capitalize" }}>
              {product.product_name}
            </Typography>
            <Typography variant="h5">{product.product_price}</Typography>
            <Typography
              variant="subtitle1"
              style={{
                marginTop: "0.5rem",
                fontSize: "0.75rem",
                opacity: "0.6",
              }}
            >
              <strong>5 IN STOCK</strong>
            </Typography>
            <br />
            <form className={classes.form} onSubmit={handleSubmit}>
              <div>
                <div className={classes.minus} onClick={minusQuantity}>
                  -
                </div>
                <input className={classes.input} value={quantity} />

                <div className={classes.plus} onClick={addQuantity}>
                  +
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className={classes.button}
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              </div>
            </form>
            <Box></Box>
            {/* <Typography
                variant="subtitle1"
                style={{ marginTop: "20px", fontSize: "16px", opacity: "0.7" }}
              >
                SKU:{product.sku}
              </Typography> */}
            <Typography
              variant="subtitle1"
              style={{ fontSize: "16px", opacity: "0.7" }}
            >
              <strong>Category:</strong>{" "}
              {product?.product_category?.category_name}
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              style={{ fontSize: "16px", opacity: "0.7" }}
            >
              <strong>Sub Category:</strong>{" "}
              {product?.product_subcategory?.subcategory_name}
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              style={{ fontSize: "16px", opacity: "0.7" }}
            >
              <strong>Tags:</strong> {product?.product_tags?.join(", ")}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

ProductDetails.propTypes = {
  setNotificationMessageConnect: PropTypes.func.isRequired,
  setIsCartUpdateConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  setNotificationMessageConnect: setNotificationMessage,
  setIsCartUpdateConnect: setIsCartUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
