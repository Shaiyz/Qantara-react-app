import { NavLink } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Drawer } from "@material-ui/core";

import linksConfig from "../links";
import { Close, ExpandLess, ExpandMore } from "@material-ui/icons";
import ListCustomItem from "./ListCustomItem";
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
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const { open, onClose, variant } = props;
  // const [subCategory, subCategory] = useState();
  // const { user } = useSelector((state) => state.auth)

  let links = linksConfig;

  // if (user) {
  //   links = links.filter((l) => l.title !== 'Login')
  //   if (user.role === 'admin') {
  //     links.push({ title: 'Logout', path: '/logout' })
  //   } else {
  //     links.push({
  //       title: 'Dashboard',
  //       path: `/dashboard/${user.role}`,
  //     })
  //   }
  // }

  const drawer = (
    <div>
      <Toolbar className={classes.toolbar}>
        <Typography>Menu</Typography>
        <Close style={{ cursor: "pointer" }} onClick={() => onClose()} />
      </Toolbar>
      <Divider />
      <input
        className={classes.searchBox}
        placeholder="Search Products..."
      ></input>
      <List>
        {links.map((category, index) => (
          <ListCustomItem key={index} item={category}></ListCustomItem>
        ))}
      </List>
    </div>
  );

  const container =
    props.window !== undefined ? () => window().document.body : undefined;

  return (
    // <Box
    //   component="nav"
    //   sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    //   aria-label="mailbox folders"
    // >
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={onClose}
        classes={{ paper: classes.paper }}
      >
        {drawer}
      </Drawer>
      {/* <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 300 },
        }}
        open
      >
        {drawer}
      </Drawer> */}
    </>
  );
};

export default Sidebar;
