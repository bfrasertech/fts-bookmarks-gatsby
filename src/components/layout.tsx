import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, ThemeProvider } from '@material-ui/styles';
import { Link } from 'gatsby';

import {
  Home,
  Inbox,
  Mail,
  Search,
  SelectAll,
  Timeline,
} from '@material-ui/icons';

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
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    },
    content: {
      backgroundColor: '#fff',
      flexGrow: 1,
      marginLeft: drawerWidth,
      padding: theme.spacing(3),
    },
    drawer: {
      flexShrink: 0,
      width: drawerWidth,
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

  return (
    <ThemeProvider theme={myTheme}>
      <div>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap={true}>
              FTS Library
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <Divider />
          <List>
            <ListItem button={true} key="home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <Link to="/">
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem button={true} key="recent">
              <ListItemIcon>
                <Timeline />
              </ListItemIcon>
              <Link to="/recent">
                <ListItemText primary="Recent" />
              </Link>
            </ListItem>
            <ListItem button={true} key="all">
              <ListItemIcon>
                <SelectAll />
              </ListItemIcon>
              <Link to="/">
                <ListItemText primary="All" />
              </Link>
            </ListItem>
            <ListItem button={true} key="search">
              <ListItemIcon>
                <Search />
              </ListItemIcon>
              <Link to="/">
                <ListItemText primary="Search" />
              </Link>
            </ListItem>
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button={true} key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <Inbox /> : <Mail />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div>
          <main className={classes.content}>
            <div>no data</div>
          </main>
        </div>
        ``
      </div>
    </ThemeProvider>
  );
};

export default withStyles(styles)(Layout);
