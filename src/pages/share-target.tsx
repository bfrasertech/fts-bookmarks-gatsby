import { css } from '@emotion/core';
import { Button } from '@material-ui/core';
import { navigate } from 'gatsby';
import React, { useState } from 'react';
import { saveUrl } from '../api/bookmark.api';

import { DesktopWindows } from '@material-ui/icons';
import Layout from '../components/layout';

const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  width: '100%',
});

const headerStyle = css({
  color: '#000',
  textAlign: 'center',
});

const buttonStyle = css({
  color: '#000',
});

const urlStyle = css({
  color: '#000',
  margin: '15px 10px',
  textAlign: 'center',
});

const statusStyle = css({
  color: '#000',
  margin: '15px 10px',
  textAlign: 'center',
});

const ShareTargetPage = () => {
  let parsedUrl: any;

  const handleSave = async (url: string) => {
    await saveUrl(url);
    setStatus('URL Saved');
    window.close();
    // navigate('/');
  };

  const [status, setStatus] = useState('');

  if (typeof window !== `undefined`) {
    parsedUrl = new URL(window.location.href);
    // alert('Title shared: ' + parsedUrl.searchParams.get('title'));
    // alert('Text shared: ' + parsedUrl.searchParams.get('text'));
    // alert('URL shared: ' + parsedUrl.searchParams.get('url'));
  }
  if (parsedUrl && parsedUrl.searchParams) {
    return (
      <div css={containerStyle}>
        <h1 css={headerStyle}>Share to FTS</h1>
        <div css={urlStyle}>{parsedUrl.searchParams.get('text')}</div>
        <Button
          css={buttonStyle}
          variant="contained"
          color="primary"
          onClick={() => handleSave(parsedUrl.searchParams.get('text'))}
        >
          Save
        </Button>
        <div />
        <div css={statusStyle}>{status}</div>
      </div>
      // <Layout>
      //   <h1>Share to FTS</h1>
      //   <p>{parsedUrl.searchParams.get('text')}</p>
      //   <button
      //     type="button"
      //     onClick={() => handleSave(parsedUrl.searchParams.get('text'))}
      //   >
      //     Save
      //   </button>
      // </Layout>
    );
  } else {
    return null;
  }
};

export default ShareTargetPage;
