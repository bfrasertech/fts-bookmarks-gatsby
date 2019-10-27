import React, { useEffect, useState } from 'react';
import { getRecentBookmarksAsync } from '../api/bookmark.api';
import BookmarkList from '../components/Bookmark-List';
import { IBookmark } from '../models/IBookmark';

import { withStyles } from '@material-ui/core';
import { createStyles, WithStyles } from '@material-ui/styles';

const styles = (theme: any) =>
  createStyles({
    app: {
      backgroundColor: '#333',
      color: '#fff',
    },
  });

interface IProps extends WithStyles<typeof styles> {
  initial: IBookmark[];
}

const Recent: React.FC<IProps> = ({ classes, initial = [] }: IProps) => {
  const [recentBookmarks, setRecentBookmarks] = useState(initial);

  useEffect(() => {
    async function fetch() {
      const result = await getRecentBookmarksAsync();
      setRecentBookmarks(result);
    }

    fetch();
  }, []);

  return (
    <div className={classes.app}>
      <BookmarkList bookmarks={recentBookmarks} />
    </div>
  );
};

export default withStyles(styles)(Recent);
