import React from "react";
import MuiListItem from "@material-ui/core/ListItem";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import {
  makeStyles,
  withStyles,
  List,
  Typography,
  ListItem,
  ListItemText,
  Badge,
  Collapse,
} from "@material-ui/core";
import { useLocation, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const CustomListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#1F1D61",
      color: "#604339",
      "& .MuiListItemIcon-root": {
        color: "#604339",
      },
      "& .MuiListItem-root": {
        color: "#604339",
      },
    },
    "&$selected:hover": {
      backgroundColor: "#1F1D61",
      color: "#604339",
      "& .MuiListItemIcon-root": {
        color: "#604339",
      },
    },
    // "&:hover": {
    //   backgroundColor: "#1F1D61",
    //   color: "white",
    //   "& .link": {
    //     color: "white",
    //   },
    //   "& .MuiListItemIcon-root": {
    //     color: "white",
    //   },
    //   "& .MuiListItemText-root": {
    //     color: "white",
    //   },
    // },
  },
})(MuiListItem);
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  icon: {
    color: "#1F1D61",
    fontSize: 24,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerColor: {
    backgroundColor: "black",
    color: "white",
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "black",
    color: "#604339",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  link: {
    textDecoration: "none",
    color: "#604339",
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
  },
  nestedList: {
    color: "#604339",
    letterSpacing: "0.00938em",
    cursor: "pointer",

    marginLeft: 56,
    "&:hover": {
      color: "#1F1D61",
    },
    fontFamily: "Roboto, sans-serif",
  },
  mainnestedList: {
    "&:hover": {
      backgroundColor: "white",
      cursor: "pointer",
    },
  },
  activenestedList: {
    color: "#1F1D61",
    letterSpacing: "0.00938em",
    marginLeft: 58,
    fontFamily: "Roboto, sans-serif",
    cursor: "pointer",
  },
}));
const ListCustomItem = ({ item }) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    history.push(`/product-category/${item.title}`);
  };

  const url = location && location.pathname.split("/");
  const active_url = url && url[1];
  return (
    <>
      {item.sub ? (
        <>
          <CustomListItem key={item.title}>
            <ListItemText
              style={{ fontSize: 10, cursor: "pointer" }}
              primary={item.title}
              onClick={() => handleClick(item)}
            />
            {open ? (
              <ExpandLess onClick={() => setOpen(false)} />
            ) : (
              <ExpandMore onClick={() => setOpen(true)} />
            )}
          </CustomListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.sub.map((res, i) => {
                return (
                  <Link to={`/category/${res}`} className={classes.link}>
                    <ListItem button className={classes.mainnestedList} key={i}>
                      <ListItemText
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        <Typography
                          className={
                            active_url == res.url
                              ? classes.activenestedList
                              : classes.nestedList
                          }
                        >
                          {res}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </Link>
                );
              })}
            </List>
          </Collapse>
        </>
      ) : (
        <Link to={`/${item.url}`} className={classes.link}>
          <CustomListItem button className="list" key={item.title}>
            <ListItemText primary={item.title} />
          </CustomListItem>
        </Link>
      )}
    </>
  );
};

export default ListCustomItem;
