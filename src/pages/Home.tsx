import { List, ListItem, ListItemText } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getRecentBookmarksAsync } from '../api/bookmark.api';

import { IBookmark } from '../models';

const Home: React.FC<{ initial: IBookmark[] }> = ({ initial = [] }) => {
  const [recentBookmarks, setRecentBookmarks] = useState(initial);

  useEffect(() => {
    async function fetch() {
      const result = await getRecentBookmarksAsync();
      setRecentBookmarks(result);
    }

    fetch();
  }, []);

  return (
    <div className="App">
      <List>
        {recentBookmarks.map((item: IBookmark) => (
          <ListItem key={item.id}>
            <ListItemText>{item.uri}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Home;
