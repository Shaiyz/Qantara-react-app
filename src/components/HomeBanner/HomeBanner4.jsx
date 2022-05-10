import { Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const PageBanner = (props) => {
  const { title, image, subTitle, size } = props;

  const useStyles = makeStyles((theme) => ({
    banner: {
      width: "100%",
      height: "90vh",
      //   background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)), url(${image}) 50% 50% no-repeat`,
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      [theme.breakpoints.down("sm")]: {
        height: size === "small" ? "300px" : "780px",
      },
    },
    bannerContainer: {
      textAlign: "center",
      margin: "40px",
    },
    bannerHeading: {
      fontSize: "34px",
      fontWeight: 500,
      margin: "0",
      letterSpacing: 0.1,
      [theme.breakpoints.down("md")]: {
        fontSize: "28px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "24px",
      },
    },
    bannerSubHeading: {
      fontSize: "18px",
      fontWeight: 400,
      margin: "10px 0",
      padding: "2% 10%",
    },
    button: {
      padding: "17px 33px",
      color: "white",
      borderColor: "#2a2a2a",
      backgroundColor: "black",
      textDecoration: "none",
      fontSize: 16,
      "&:hover": {},
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <div className={classes.bannerContainer}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} sm={12} lg={6}>
            <img src={"assets/images/test.jpg"} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <h2 className={classes.bannerHeading}>{title}</h2>
            {subTitle && <p className={classes.bannerSubHeading}>{subTitle}</p>}
            <br />
            <Link to="/shop" className={"discover_btn " + classes.button}>
              Discover More
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PageBanner;
