import { navigate } from 'gatsby';
import React from 'react';
import { saveUrl } from '../api/bookmark.api';

import Layout from '../components/layout';

const handleSave = async (url: string) => {
  await saveUrl(url);
  navigate('/');
};

const ShareTargetPage = () => {
  let parsedUrl: any;

  if (typeof window !== `undefined`) {
    parsedUrl = new URL(window.location.href);
    // alert('Title shared: ' + parsedUrl.searchParams.get('title'));
    // alert('Text shared: ' + parsedUrl.searchParams.get('text'));
    // alert('URL shared: ' + parsedUrl.searchParams.get('url'));
  }
  return (
    <Layout>
      <h1>Share to FTS</h1>
      <p>{parsedUrl.searchParams.get('text')}</p>
      <button
        type="button"
        onClick={() => handleSave(parsedUrl.searchParams.get('text'))}
      >
        Save
      </button>
    </Layout>
  );
};

export default ShareTargetPage;
