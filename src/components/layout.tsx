import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, ThemeProvider } from '@material-ui/styles';
import { Link } from 'gatsby';

import { Home, Search } from '@material-ui/icons';

import createMyTheme from '../styles/mainTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  // tslint:disable-next-line:interface-name
  interface Theme {
    appDrawer: {
      width: React.CSSProperties['width'];
      breakpoint: Breakpoint;
    };
    contentBackground: React.CSSProperties['backgroundColor'];
  }
  // allow configuration using `createMuiTheme`
  // tslint:disable-next-line:interface-name
  interface ThemeOptions {
    appDrawer?: {
      width?: React.CSSProperties['width'];
      breakpoint?: Breakpoint;
    };
    contentBackground: React.CSSProperties['backgroundColor'];
  }
}

const myTheme = createMyTheme({
  appDrawer: { breakpoint: 'md' },
  contentBackground: '#000',
});

const drawerWidth = 240;

const styles = (theme: any) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    leftMenu: {
      marginTop: '80px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    content: {
      backgroundColor: '#fff',
      flexGrow: 1,
      marginTop: '80px',
      padding: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
  });

interface IProps extends WithStyles<typeof styles> {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = (props: IProps) => {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <List className={classes.leftMenu}>
        <ListItem button={true} key="home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <Link to="/">
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem button={true} key="searchbookmarks">
          <ListItemIcon>
            <Search />
          </ListItemIcon>
          <Link to="/Search">
            <ListItemText primary="Search" />
          </Link>
        </ListItem>
      </List>
    </>
  );

  return (
    <ThemeProvider theme={myTheme}>
      <div>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              component={'span'}
              noWrap={true}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              FTS Library
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden smUp implementation="css">
          <Drawer
            className={classes.drawer}
            variant="temporary"
            classes={{
              paper: classes.drawerPaper,
            }}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor="left"
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
        <div>
          <main className={classes.content}>{props.children}</main>
        </div>
        ``
      </div>
    </ThemeProvider>
  );
};

export default withStyles(styles)(Layout);
