import { css } from '@emotion/core';
import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getBookmarkPage } from '../api/bookmark.api';
import BookmarkList from '../components/Bookmark-List';
import Layout from '../components/layout';

import { IPagedQueryResult } from '../models/IPagedQueryResult';

interface IProps {
  initial: IPagedQueryResult;
}

const searchBoxStyles = css({
  width: '250px',
});

const SearchPage: React.FC<IProps> = (
  props: IProps = {
    initial: {
      bookmarks: [],
      requestContinuationToken: '',
      totalCount: 0,
    },
  }
) => {
  const [queryResult, setQueryResult] = useState(props.initial);

  useEffect(() => {
    async function fetch() {
      const result = await getBookmarkPage({
        continuationToken: '',
        pageSize: 10,
        sort: '',
      });
      setQueryResult(result);
    }

    fetch();
  }, []);

  if (queryResult) {
    return (
      <div>
        <Layout>
          <div>
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              css={searchBoxStyles}
              margin="normal"
            />
          </div>
          <div>
            <BookmarkList bookmarks={queryResult.bookmarks} />
          </div>
        </Layout>
      </div>
    );
  } else {
    return null;
  }
};

export default SearchPage;
