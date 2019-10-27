import React, { useEffect, useState } from 'react';
import { getBookmarkPage } from '../api/bookmark.api';
import BookmarkList from '../components/Bookmark-List';
import Layout from '../components/layout';

import { IPagedQueryResult } from '../models/IPagedQueryResult';

interface IProps {
  initial: IPagedQueryResult;
}

const IndexPage: React.FC<IProps> = (
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
          <BookmarkList bookmarks={queryResult.bookmarks} />
        </Layout>
      </div>
    );
  } else {
    return null;
  }
};

export default IndexPage;
