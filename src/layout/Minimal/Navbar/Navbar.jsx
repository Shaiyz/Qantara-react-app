import { NavLink } from "react-router-dom";
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
import { useState } from "react";
import { CartSideBar } from "../../../components";
import Badge from "@material-ui/core/Badge";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    border: "none",
    boxShadow: "none",
    display: "flex",
    flexDirection: "row",
    height: "100px",
    justifyContent: "space-between",
    padding: "10px 20px",
    // "&:hover": {
    //   backgroundColor: "#FFF",
    //   "& $navItem": {
    //     color: "black",
    //   },
    //   "& $arrow": {
    //     border: "solid black",
    //     borderWidth: "0 1.5px 1.5px 0",
    //     display: "inline-block",
    //     padding: "1.5px",
    //     marginBottom: "3px",
    //     transform: "rotate(45deg)",
    //     webkitTransform: "rotate(45deg)",
    //   },
    //   "& $img": {
    //     width: "100%",
    //     content: `url("assets/images/logo1.png")`,
    //     [theme.breakpoints.down("md")]: {
    //       width: "150%",
    //     },
    //     [theme.breakpoints.down("sm")]: {
    //       width: "250%",
    //     },
    //   },
    //   "& $icon": {
    //     color: "#000",
    //   },
    //   "& $menuBtn": {
    //     color: "black",
    //     zIndex: 1400,
    //   },
    // },
  },
  header1: {
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    border: "none",
    boxShadow: "none",
    display: "flex",
    flexDirection: "row",
    height: "100px",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "#FFF",
    "& $navItem": {
      color: "black",
    },
    "& $arrow": {
      border: "solid black",
      borderWidth: "0 1.5px 1.5px 0",
      display: "inline-block",
      padding: "1.5px",
      marginBottom: "3px",
      transform: "rotate(45deg)",
      webkitTransform: "rotate(45deg)",
    },
    "& $img": {
      width: "100%",
      content: `url("assets/images/logo1.png")`,
      [theme.breakpoints.down("md")]: {
        width: "150%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "250%",
      },
    },
    "& $icon": {
      color: "#000",
    },
    "& $menuBtn": {
      color: "black",
      zIndex: 1400,
    },
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
      marginRight: "0ox",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
    },
  },
  icon: { color: "white", padding: "10px 10px", cursor: "pointer" },
  img: {
    width: "100%",
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
    margin: "0 10px",
    padding: "0 2px",
    color: "white",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "1px",
    textDecoration: "none",
    "&:hover": {
      height: "2px",
      textDecoration: "2px underline",
    },
  },
  menuBtn: {
    color: "white",
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
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "white",
      },
    },
  },
  menuItem: {
    justifyContent: "flex-start",
    backgroundColor: "#FFF !important",

    "&:hover": {
      textDecoration: "2px underline",
    },
  },
  arrow: {
    border: "solid white",
    borderWidth: "0 1.5px 1.5px 0",
    display: "inline-block",
    padding: "1.5px",
    marginBottom: "3px",
    transform: "rotate(45deg)",
    webkitTransform: "rotate(45deg)",
  },
  customBadge: {
    backgroundColor: "#cacaca",
    color: "white",
    "&:hover": {
      backgroundColor: "black",
    },
  },
}));

const Navbar = ({ toggleMobileNav }) => {
  let links = linksConfig;
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openCartSidebar, setCartOpenSidebar] = useState(false);
  const [state, setScroll] = useState(false);

  const [subCategory, setSubCategory] = useState([]);

  function handleClick(event, item) {
    const selected = links.filter((i) => i.title == item.title);
    setSubCategory(selected[0].sub);
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }
  const toggleCartNav = () => {
    setCartOpenSidebar((prev) => !prev);
  };

  function handleClose(sub) {
    history.push(`/product-category/category/${sub}`);
    setAnchorEl(null);
  }
  const handleScroll = (e) => {
    if (e.path[1].scrollY > 45) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar className={state ? classes.header1 : classes.header}>
        <Hidden only={["md", "lg", "xl"]}>
          <IconButton className={classes.menuBtn} onClick={toggleMobileNav}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Link to="/" className={classes.logo}>
          <img className={classes.img} src="assets/images/logo2.png"></img>
        </Link>
        <Toolbar className={classes.headerContainer}>
          <Hidden only={["xs", "sm"]}>
            <nav className={classes.navbar}>
              {links.map((item, i) => (
                <>
                  <NavLink
                    className={classes.navItem}
                    to={item.path}
                    activeClassName={classes.activeNav}
                    key={i}
                    exact={item.isExact}
                    aria-owns={anchorEl ? "simple-menu" : undefined}
                    aria-haspopup="true"
                    onMouseOver={(e) => handleClick(e, item)}
                  >
                    {item.title}
                  </NavLink>
                  <i className={classes.arrow} />
                </>
              ))}
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                className={classes.menu}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
                {subCategory.map((subCategory, index) => (
                  <MenuItem
                    className={classes.menuItem}
                    onClick={() => handleClose(subCategory)}
                    // onMouseEnter={(e) =>
                    //   (e.target.style.backgroundColor = "white")
                    // }
                  >
                    {subCategory}
                  </MenuItem>
                ))}
              </Menu>
            </nav>
          </Hidden>
        </Toolbar>
        <Box className={classes.iconContainer}>
          <PersonOutline className={classes.icon} />
          <SearchOutlined className={classes.icon} />
          <LocalMallOutlined
            className={classes.icon}
            onClick={() => toggleCartNav()}
          />
          <Badge
            badgeContent={1}
            classes={{ badge: classes.customBadge }}
          ></Badge>
        </Box>
      </AppBar>
      <CartSideBar open={openCartSidebar} onClose={toggleCartNav} />
    </>
  );
};

export default Navbar;
