import React, {useState} from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles, useTheme} from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import _ from 'lodash';
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from 'clsx';
import {ListItemIcon} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {},
  appBar: {
    // zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    backgroundColor: theme.primary
  }

}));


const ListItemLink = (props)=> {
  const {icon, primary,to} = props;

  const CustomLink = React.useMemo(
      () =>
          React.forwardRef((linkProps, ref) => (
              <Link ref={ref} to={to} {...linkProps} />
          )),
      [to],
  );

  return (
      <li>
        <ListItem button component={CustomLink}>
          {icon? <ListItemIcon>{icon}</ListItemIcon>:null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
  );
};

const AppBar = ({routes}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpenClose = () => setOpen(!open);


  const list = () => (
      <div
          className={clsx(classes.list, {
            // [classes.fullList]: anchor === 'top' || anchor === 'bottom'
          })}
          role="presentation"
          onClick={handleOpenClose}
          onKeyDown={handleOpenClose}
      >
        <List>
          {
            _.map(routes, (route, index) => (
                <ListItemLink key={index} to={route.path}
                primary={route.name}/>
            ))
          }
        </List>
      </div>
  );
  return (
      <div className={classes.root}>
        <MuiAppBar position="fixed" className={classes.appBar}>
          <Toolbar variant="dense">
            <IconButton edge="start"
                        color="inherit"
                        aria-label="menu"
                        className={classes.menuButton}
                        onClick={handleOpenClose}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6">
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </MuiAppBar>
        <Drawer className={classes.drawer}
                anchor="left"
                open={open}
                onClose={handleOpenClose}>
          {list()}
        </Drawer>
      </div>
  )
};
export default AppBar