import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const PageBanner = (props) => {
  const { title, image, subTitle, size } = props;

  const useStyles = makeStyles((theme) => ({
    banner: {
      width: "100%",
      height: "30vh",
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)), url(${image}) 50% 50% no-repeat`,
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        height: '30vh'
      },
    },
    bannerContainer: {
      textAlign: "center",
      maxWidth: "90%",
    },
    bannerHeading: {
      fontSize: "34px",
      fontWeight: 500,
      margin: "0",
      letterSpacing: 0.1,
      [theme.breakpoints.down("md")]: {
        fontSize: "32px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
      },
    },
    bannerSubHeading: {
      fontSize: "18px",
      fontWeight: 500,
      margin: "20px 0",
    },
    button: {
      backgroundColor: "rgba(0, 0, 0, 0.01)",
      padding: "13px 38px",
      borderRadius: "30px",
      border: "2px solid white",
      color: "white",
      textDecoration: "none",
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
      <div className={classes.bannerContainer}>
        <h2 className={classes.bannerHeading}>{title}</h2>
        {subTitle && <p className={classes.bannerSubHeading}>{subTitle}</p>}
      </div>
    </div>
  );
};

export default PageBanner;
