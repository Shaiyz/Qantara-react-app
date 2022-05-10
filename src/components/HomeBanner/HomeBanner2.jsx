import { Container, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const PageBanner = (props) => {
  const { title, image, subTitle, size } = props;

  const useStyles = makeStyles((theme) => ({
    banner: {
      width: "100%",
      height: "85vh",
      background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2)), url(${image}) 50% 50% no-repeat`,
      backgroundSize: "cover",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        height: size === "small" ? "300px" : "780px",
      },
    },
    bannerContainer: {
      // textAlign: "center",
      maxWidth: "90%",
    },
    bannerHeading: {
      fontSize: "64px",
      maxWidth: "38%",

      fontWeight: 700,
      margin: "0",
      letterSpacing: 0.1,
      [theme.breakpoints.down("md")]: {
        fontSize: "54px",
        maxWidth: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "45px",
        maxWidth: "100%",
      },
    },
    bannerSubHeading: {
      fontSize: "20px",
      maxWidth: "38%",
      lineHeight: "30px",
      fontWeight: 400,
      margin: "10px 0",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
        maxWidth: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        maxWidth: "100%",
      },
    },
    button: {
      backgroundColor: "rgba(0, 0, 0, 0.01)",
      padding: "13px 0",
      color: "white",
      textDecoration: "none",
      fontSize: "19px",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container style={{ marginTop: "10rem" }}>
        <h2 className={classes.bannerHeading}>{title}</h2>
        <p className={classes.bannerSubHeading}>{subTitle}</p>
        <br />
        <Link to="/shop" className={classes.button}>
          Shop now →
        </Link>
      </Container>
    </div>
  );
};

export default PageBanner;
