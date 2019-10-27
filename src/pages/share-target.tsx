import { Link } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

const ShareTargetPage = () => {
  if (typeof window !== `undefined`) {
    const parsedUrl = new URL(window.location.href);
    alert('Title shared: ' + parsedUrl.searchParams.get('title'));
    alert('Text shared: ' + parsedUrl.searchParams.get('text'));
    alert('URL shared: ' + parsedUrl.searchParams.get('url'));
  }
  return (
    <Layout>
      <h1>Sharing</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default ShareTargetPage;
