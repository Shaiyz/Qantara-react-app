import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const PageBanner = (props) => {
  const { title, image, subTitle, size } = props;

  const useStyles = makeStyles((theme) => ({
    banner: {
      width: "100%",
      height: "100vh",
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)), url(${image}) 50% 50% no-repeat`,
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        height: size === "small" ? "300px" : "780px",
      },
    },
    bannerContainer: {
      textAlign: "center",
      maxWidth: "90%",
    },
    bannerHeading: {
      fontSize: "64px",
      fontWeight: 700,
      margin: "0",
      letterSpacing: 0.1,
      [theme.breakpoints.down("md")]: {
        fontSize: "54px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "45px",
      },
    },
    bannerSubHeading: {
      fontSize: "18px",
      fontWeight: 400,
      margin: "10px 0",
    },
    button: {
      backgroundColor: "rgba(0, 0, 0, 0.01)",
      padding: "13px 38px",
      borderRadius: "30px",
      border: "2px solid white",
      color: "white",
      textDecoration:'none',
      fontSize: 16,
      "&:hover": {
        backgroundColor: "white",
        color: "black",
      },
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <br />
      <br />
      <br />
      <div className={classes.bannerContainer}>
        <h2 className={classes.bannerHeading}>{title}</h2>
        {subTitle && <p className={classes.bannerSubHeading}>{subTitle}</p>}
        <br />
        <Link to="/shop" className={"show_now_btn " + classes.button}>
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default PageBanner;
