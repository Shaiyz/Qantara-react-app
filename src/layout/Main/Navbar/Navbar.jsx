import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  makeStyles,
  Toolbar,
  Hidden,
  IconButton,
  Box,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  PersonOutline,
  SearchOutlined,
  LocalMallOutlined,
} from "@material-ui/icons";
import linksConfig from "../links";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartSideBar } from "../../../components";
import Badge from "@material-ui/core/Badge";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getSubCategories } from "../../../utils/categoriesUtils";
import { setIsCartUpdate } from "../../../lib/actions";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    backgroundColor: "#FFF",
    border: "none",
    boxShadow: "none",
    display: "flex",
    flexDirection: "row",
    height: "100px",
    justifyContent: "space-between",
    padding: "10px 20px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginLeft: "100px",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "100px",
    [theme.breakpoints.down("md")]: {
      marginRight: "0px",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
    },
  },
  icon: { color: "#000", padding: "10px 10px", cursor: "pointer" },
  img: {
    width: "100%",
    // content: `url("assets/images/logo1.png")`,
    [theme.breakpoints.down("md")]: {
      width: "150%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "250%",
    },
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navItem: {
    padding: "0 5px",
    color: "black",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    textDecoration: "none",
    // "&:hover": {
    //   height: "2px",
    //   textDecoration: "2px underline",
    // },
  },
  menuBtn: {
    color: "black",
    zIndex: 1400,
  },
  iconBtn: {
    color: "white",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  menu: {
    "& .MuiPaper-root": {
      borderRadius: "0px",
      width: "170px",
      marginTop: "10px",
      boxShadow: "1px 1px 5px 1px #ece9e9",
      border: "1px solid #ece9e9",
      "&:hover": {
        backgroundColor: "white",
      },
    },
  },
  menuItem: {
    justifyContent: "flex-start",
    backgroundColor: "#FFF !important",
    // "&:hover": {
    //   textDecoration: "2px underline",
    // },
  },
  arrow: {
    border: "solid black",
    borderWidth: "0 1.5px 1.5px 0",
    display: "inline-block",
    padding: "1.5px",
    marginBottom: "4px",
    transform: "rotate(45deg)",
    webkitTransform: "rotate(45deg)",
    marginRight: "1.2rem",
    color: "#2f2e2e",
  },
  customBadge: {
    backgroundColor: "#cacaca",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
    },
  },
}));

const Navbar = ({
  toggleMobileNav,
  isAuthenticate,
  setIsCartUpdateConnect,
  isCartUpdate,
}) => {
  // let links = linksConfig;
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCartSidebar, setCartOpenSidebar] = useState(false);
  const [subCategory, setSubCategory] = useState([]);
  const [links, setLinks] = useState([]);
  const [cartItems, setCartItems] = useState(0);

  function handleClick(event, item) {
    if (item === "view more") {
      const restNavs = links.filter((e, i) => i > 4);

      setSubCategory(restNavs.map((e) => e.title));
      if (anchorEl !== event.currentTarget) {
        setAnchorEl(event.currentTarget);
      }
    } else {
      const selected = links.filter((i) => i.title == item.title);
      setSubCategory(selected[0].sub);
      if (anchorEl !== event.currentTarget) {
        setAnchorEl(event.currentTarget);
      }
    }
  }

  const toggleCartNav = () => {
    setCartOpenSidebar((prev) => !prev);
  };

  function handleClose(sub) {
    history.push(`/product-category/${sub?.subcategory_name}/${sub?.value}`);
    setAnchorEl(null);
  }

  function handleCloseMenu() {
    setAnchorEl(null);
  }

  const fetchInitialData = async () => {
    try {
      const resp = await getSubCategories();

      const allCatagories = resp.data.data.map(
        (e) => e?.category_name?.category_name
      );

      const uniqueCategories = [...new Set(allCatagories)];

      const categories = uniqueCategories
        .map((e) => {
          const subCategory = resp.data.data.filter(
            (a) => a?.category_name?.category_name === e
          );

          if (subCategory)
            return {
              title: e,
              sub: subCategory?.map((x) => ({
                subcategory_name: x?.subcategory_name,
                value: x?._id,
              })),
              path: "/product-category/category/",
              isExact: true,
            };
          return false;
        })
        .filter((x) => x);

      setLinks(categories);
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  };

  const countCartItem = () => {
    if (window.localStorage.getItem("cart")) {
      const cartList = JSON.parse(window.localStorage.getItem("cart"));

      const count =
        (cartList?.length &&
          cartList.filter((x) => x?.quantity !== 0)?.length) ||
        0;

      const list = cartList.filter((e) => e?.quantity !== 0);
      window.localStorage.setItem("cart", JSON.stringify(list));
      setCartItems(count);
    } else {
      setCartItems(0);
    }
  };

  useEffect(() => {
    if (!isCartUpdate) return;

    countCartItem();
    setIsCartUpdateConnect(false);
  }, [isCartUpdate]);

  useEffect(() => {
    fetchInitialData();
    countCartItem();
  }, []);

  return (
    <>
      <AppBar className={classes.header}>
        <Hidden only={["md", "lg", "xl"]}>
          <IconButton className={classes.menuBtn} onClick={toggleMobileNav}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Link to="/" className={classes.logo}>
          <img className={classes.img} src="/assets/images/logo1.png"></img>
        </Link>
        <Toolbar className={classes.headerContainer}>
          <Hidden only={["xs", "sm"]}>
            <nav className={classes.navbar}>
              {links.map((item, i) => {
                if (i <= 4)
                  return (
                    <>
                      <NavLink
                        className={"navLinkHover " + classes.navItem}
                        to={item.path}
                        activeClassName={classes.activeNav}
                        key={i}
                        exact={item.isExact}
                        aria-owns={"simple-menu"}
                        aria-haspopup="true"
                        onMouseOver={(e) => handleClick(e, item)}
                      >
                        {item.title}
                      </NavLink>
                      <i className={classes.arrow} />
                    </>
                  );
                else if (i === 5)
                  return (
                    <>
                      <NavLink
                        className={"navLinkHover " + classes.navItem}
                        to={item.path}
                        activeClassName={classes.activeNav}
                        key={i}
                        exact={item.isExact}
                        aria-owns={"simple-menu"}
                        aria-haspopup="true"
                        onMouseOver={(e) => handleClick(e, "view more")}
                      >
                        View more
                      </NavLink>
                      <i className={classes.arrow} />
                    </>
                  );
              })}
              <Menu
                // id="simple-menu"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                className={classes.menu}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                MenuListProps={{ onMouseLeave: handleCloseMenu }}
              >
                {subCategory.map((subCategory, index) => (
                  <MenuItem
                    className={"menuItemHover " + classes.menuItem}
                    onClick={() => handleClose(subCategory)}
                  >
                    {subCategory?.subcategory_name}
                  </MenuItem>
                ))}
              </Menu>
            </nav>
          </Hidden>
        </Toolbar>
        <Box className={classes.iconContainer}>
          <PersonOutline
            className={classes.icon}
            onClick={() => {
              if (isAuthenticate) history.push("/user/dashboard");
              else history.push("/login");
            }}
          />
          <SearchOutlined className={classes.icon} />
          <LocalMallOutlined
            className={classes.icon}
            onClick={() => toggleCartNav()}
          />
          <Badge
            badgeContent={cartItems || "0"}
            classes={{ badge: classes.customBadge }}
          ></Badge>
        </Box>
      </AppBar>
      <CartSideBar open={openCartSidebar} onClose={toggleCartNav} />
    </>
  );
};

Navbar.propTypes = {
  isAuthenticate: PropTypes.bool.isRequired,
  isCartUpdate: PropTypes.bool.isRequired,
  setIsCartUpdateConnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticate: state.app.isAuthenticate,
  isCartUpdate: state.app.isCartUpdate,
});

const mapDispatchToProps = {
  setIsCartUpdateConnect: setIsCartUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
