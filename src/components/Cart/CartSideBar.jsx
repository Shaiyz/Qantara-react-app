import {
  Box,
  CardMedia,
  Container,
  Divider,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Drawer } from "@material-ui/core";

// import linksConfig from "../links";
import { Close, ExpandLess, ExpandMore } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { setIsCartUpdate } from "../../lib/actions";
// import ListCustomItem from "./ListCustomItem";
// import { useSelector } from 'react-redux'
import { getAllProducts } from "../../utils/productsUtils";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "80%",
    margin: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
    height: "auto",
    position: "relative",
    top: "20px",
  },

  navbar: {
    display: "flex",
    flexDirection: "column",
    margin: "40px 10px",
    alignItems: "center",
  },
  searchBox: {
    // display: "flex",
    // justifySelf: "center",
    // justifyContent: "center",
    padding: "0 16px",
    marginLeft: "2%",
    height: "42px",
    lineHeight: "42px",
    border: "1px solid #e5e5e5",
    color: " #737373",
    width: "85%",
    marginTop: "5%",
  },

  navItem: {
    width: "80%",
    margin: "10px 0px",
    padding: "2px 10px",
    color: "white",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    textDecoration: "none",
    borderBottom: "1px dotted #5a5959",
    "&:hover": {
      color: "#555",
      backgroundColor: "#e7e7e7",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f4f4f4",
  },
  paper: {
    width: "30rem",
  },

  activeNav: {
    color: "#555",
    backgroundColor: "#e7e7e7",
  },
  subTotal: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 20px",
  },
  productName: {
    textDecoration: "none",
    color: "black",
  },
  extraSmallIcon: {
    width: 15,
    height: 15,
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    padding: "10px",
    width: "45%",
    border: "1px solid ",
    color: "black",
    fontSize: 16,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  button2: {
    backgroundColor: "black",
    padding: "10px",
    width: "45%",
    border: "1px solid black",
    color: "white",
    fontSize: 16,
    cursor: "pointer",
    marginLeft: "10%",
    "&:hover": {
      opacity: "0.9",
    },
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 20,
    marginBottom: 35,
  },
  cartList: {
    maxHeight: "60vh",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "3px",
    },
    padding: "10px",
    /* Track */
    "&::-webkit-scrollbar-track": {
      background: "#eaeaea",
    },
    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "black",
    },
  },
}));

const CartSidebar = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { open, onClose } = props;

  const [cartDetails, setCartDetails] = useState(null);
  const [selectedCartItems, setSelectedCartItems] = useState(null);

  const removeFromCart = (removeID) => {
    const list = window.localStorage.getItem("cart")
      ? JSON.parse(window.localStorage.getItem("cart"))
      : null;

    const updateCart = list.filter(
      (e) => String(e?.productID) !== String(removeID)
    );

    setSelectedCartItems(updateCart);
    window.localStorage.setItem("cart", JSON.stringify(updateCart));
    dispatch(setIsCartUpdate(true));
  };

  const fetchInitialData = async () => {
    try {
      const list = window.localStorage.getItem("cart")
        ? JSON.parse(window.localStorage.getItem("cart"))
        : null;

      setSelectedCartItems(
        list?.length > 0 ? list.filter((x) => x?.quantity !== 0) : null
      );

      const resp = await getAllProducts();
      setCartDetails(resp.data.data);
    } catch (error) {
      console.log(error?.response?.data?.message || error);
    }
  };

  const calculateTotalAmount = () => {
    const list = window.localStorage.getItem("cart")
      ? JSON.parse(window.localStorage.getItem("cart"))
      : null;

    if (!selectedCartItems?.length) return 0;

    if (!cartDetails?.length) return 0;

    return list.reduce((a, b) => {
      const result =
        cartDetails.find((x) => String(x?._id) === String(b?.productID))
          ?.product_price * b?.quantity;
      return (a += result);
    }, 0);
  };

  useEffect(() => {
    if (!open) return;

    const list = window.localStorage.getItem("cart")
      ? JSON.parse(window.localStorage.getItem("cart"))
      : null;

    setSelectedCartItems(
      list?.length > 0 ? list.filter((x) => x?.quantity !== 0) : null
    );
  }, [open]);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const drawer = (
    <div>
      <Toolbar className={classes.toolbar}>
        <Typography>Cart Details</Typography>
        <Close style={{ cursor: "pointer" }} onClick={() => onClose()} />
      </Toolbar>
      <Divider />
      <Container className={classes.cartList}>
        <List>
          {selectedCartItems?.length && cartDetails?.length ? (
            cartDetails.map((item, index) => {
              if (
                selectedCartItems?.find(
                  (x) => String(x?.productID) === String(item?._id)
                )
              ) {
                const selectedItem = selectedCartItems?.find(
                  (x) => String(x?.productID) === String(item?._id)
                );

                return (
                  <ListItem>
                    <CardMedia
                      component="img"
                      style={{ width: "20%" }}
                      image={item?.product_images[0]?.image}
                      // image={"assets/images/test.jpg"}
                      alt="Product image"
                    />
                    <Box className={classes.productInfo}>
                      <Link
                        className={classes.productName}
                        to={`/product/${item._id}`}
                      >
                        {item?.product_name}
                      </Link>

                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        style={{ marginTop: "1rem" }}
                      >
                        <small>
                          {selectedItem?.quantity || 0} x {item?.product_price}
                        </small>
                      </Typography>
                    </Box>
                    <Close
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "5px",
                        cursor: "pointer",
                      }}
                      className={classes.extraSmallIcon}
                      onClick={() => removeFromCart(item?._id)}
                    />
                  </ListItem>
                );
              }
            })
          ) : (
            <h2>No products</h2>
          )}
        </List>
      </Container>

      <div
        style={{
          position: "absolute",
          left: "20px",
          top: "72vh",
          width: "90%",
        }}
      >
        <hr style={{ border: "1px solid #eaeaea" }} />
        <div className={classes.subTotal}>
          <Typography variant="subtitle1">
            <strong>Subtotal:</strong>
            <strong>{calculateTotalAmount()}</strong>
          </Typography>
          {/* <Typography variant="subtitle1">
            <strong>100</strong>
            <strong>100</strong>
          </Typography> */}
        </div>
        <br />
        <hr style={{ border: "1px solid #eaeaea" }} />
        <br />
        <button
          onClick={() => history.push("/cart")}
          className={classes.button}
        >
          View Cart
        </button>
        <button
          onClick={() => history.push("/checkout")}
          className={classes.button2}
        >
          Checkout
        </button>
      </div>
    </div>
  );

  const container =
    props.window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={onClose}
        classes={{ paper: classes.paper }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

// CartSidebar.defaultProps = {
//   cart: [
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

export default CartSidebar;
