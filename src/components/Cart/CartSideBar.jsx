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
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import ListCustomItem from "./ListCustomItem";
// import { useSelector } from 'react-redux'

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
    width: 10,
    height: 10,
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
  const { open, onClose } = props;
  const removeFromCart = (item) => {};

  const drawer = (
    <div>
      <Toolbar className={classes.toolbar}>
        <Typography>Shopping Bag</Typography>
        <Close style={{ cursor: "pointer" }} onClick={() => onClose()} />
      </Toolbar>
      <Divider />
      <Container className={classes.cartList}>
        <List>
          {props.cart.map((item, index) => (
            <ListItem>
              <CardMedia
                component="img"
                style={{ width: "20%" }}
                // image={item.product_images[0].img}
                image={"assets/images/test.jpg"}
                alt="Product image"
              />
              <Box className={classes.productInfo}>
                <Link
                  className={classes.productName}
                  to={`/product/${item._id}`}
                >
                  {item.product_name}
                </Link>

                <Typography variant="subtitle1" color="text.secondary">
                  <small>
                    {item.quantity} x {item.product_price}{" "}
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
                onClick={() => removeFromCart(item)}
              />
            </ListItem>
          ))}
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
          </Typography>
          <Typography variant="subtitle1">
            <strong>100</strong>
          </Typography>
        </div>
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

CartSidebar.defaultProps = {
  cart: [
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

export default CartSidebar;
