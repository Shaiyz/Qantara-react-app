import {
  makeStyles,
  List,
  ListItem,
  Grid,
  Typography,
} from "@material-ui/core";
import { Instagram, Twitter, Facebook } from "@material-ui/icons";
import { Link } from "react-router-dom";
import linksConfig from "./links";
const useStyle = makeStyles((theme) => ({
  footerSec: {
    padding: "70px 0",
    backgroundColor: "white",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "95%",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
    "& h2": {
      color: "black",
      fontSize: "44px",
      textTransform: "uppercase",
      fontWeight: "600",
      letterSpacing: "1px",
      position: "relative",

      "&::before": {
        content: '""',
        position: "absolute",
        bottom: "-20px",
        left: "50%",
        width: "80px",
        marginLeft: "-40px",
        background: theme.palette.primary.main,
        height: "2px",
      },
    },

    "& h4": {
      marginTop: "50px",
      color: "black",
      fontSize: "18px",
      fontWeight: "400",
    },

    "& h6": {
      color: "black",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "1.8",
      marginTop: "40px",
      opacity: "0.6",
    },

    "& p": {
      color: theme.palette.white,
      fontSize: "12px",
      lineHeight: "1.8",
      marginBottom: "40px",
    },
  },

  form: {
    margin: "auto",
    maxWidth: "600px",
    padding: "0",
    marginBottom: "40px",

    "& input": {
      color: theme.palette.white,
      padding: "0 20px",
      width: "40%",
      height: "60px",
      border: "0",
      borderRadius: "0",
      textTransform: "uppercase",
      fontSize: "14px",
      letterSpacing: "2px",

      [theme.breakpoints.down("xs")]: {
        width: "80%",
        marginBottom: "20px",
      },
    },
    "& button": {
      height: "60px",
      borderRadius: "0",
      marginLeft: "0",
    },
  },
  linksList: {
    display: "flex",
    alignItems: "center",
    width: "80%",

    "& li": {
      paddingLeft: "5px",
      paddingRight: "5px",
      whiteSpace: "nowrap",

      "& a": {
        color: "black",
        textDecoration: "none",
        fontSize: "16px",
        fontWeight: "500",
      },
    },
  },
  IconList: {
    display: "flex",
    width: "15%",
    float: "right",
  },
}));

const Footer = () => {
  const classes = useStyle();
  return (
    <section className={classes.footerSec}>
      <Grid container style={{ padding: "0px 40px" }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <List className={classes.linksList}>
            {linksConfig.map((link, i) => {
              return (
                <ListItem key={i}>
                  <Link to={link.path}> {link.title} </Link>
                </ListItem>
              );
            })}
          </List>
          <Typography
            variant="h6"
            color="textSecondary"
            style={{ display: "flex", alignItems: "start" }}
          >
            © 2020 AlQantara. All Rights Reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <List className={classes.IconList}>
            <ListItem>
              <Facebook />
            </ListItem>
            <ListItem>
              <Instagram />
            </ListItem>
            <ListItem>
              <Twitter />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </section>
  );
};

export default Footer;
