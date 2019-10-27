import {
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MoreHoriz, Star, StarBorder } from '@material-ui/icons';

import React from 'react';

import { IBookmark } from '../models/IBookmark';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },

  itemAvatar: {
    marginRight: theme.spacing(2),
  },

  input: {
    display: 'none',
  },
}));

export interface IBookmarkItemProps {
  bookmark: IBookmark;
}

const options = ['Delete'];

const ITEM_HEIGHT = 48;

const BookmarkItem: React.FC<IBookmarkItemProps> = (
  props: IBookmarkItemProps
) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenuClick(event: any) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  return (
    <ListItem key={props.bookmark.id} alignItems="flex-start">
      <ListItemAvatar className={classes.itemAvatar}>
        <img src="favicon.ico" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant="h6" component={'span'}>
            {props.bookmark.title}
          </Typography>
        }
        secondary={
          <React.Fragment>
            <Typography component="span" variant="body1" color="textPrimary">
              {`${props.bookmark.dateCreated} - ${props.bookmark.description}`}
            </Typography>
            <Typography component={'span'} variant="body2">
              {props.bookmark.summary}
            </Typography>

            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted={true}
              open={open}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200,
                },
              }}
            >
              {options.map(option => (
                <MenuItem
                  key={option}
                  selected={option === 'Pyxis'}
                  onClick={handleMenuClose}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </React.Fragment>
        }
      >
        {props.bookmark.uri}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          color="primary"
          className={classes.button}
          aria-label="More"
          onClick={handleMenuClick}
        >
          <MoreHoriz />
        </IconButton>
        <IconButton
          color="primary"
          className={classes.button}
          aria-label="Favorite"
        >
          <Star />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default BookmarkItem;
