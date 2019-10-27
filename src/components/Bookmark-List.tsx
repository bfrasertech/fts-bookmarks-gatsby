import { Divider, List } from '@material-ui/core';
import React from 'react';
import { IBookmark } from '../models/IBookmark';
import BookmarkItem from './Bookmark-Item';

export interface IBookmarkListProps {
  bookmarks: IBookmark[];
}

const BookmarkList: React.FC<IBookmarkListProps> = (
  props: IBookmarkListProps
) => {
  return (
    <div className="App">
      {!props.bookmarks || props.bookmarks.length === 0 ? (
        <div>No items to display</div>
      ) : (
        <List dense={true}>
          {props.bookmarks.map((item: IBookmark) => (
            <React.Fragment key={item.id}>
              <Divider />
              <BookmarkItem bookmark={item} key={item.id} />
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}
    </div>
  );
};

export default BookmarkList;
