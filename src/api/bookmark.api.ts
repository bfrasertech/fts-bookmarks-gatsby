import { IBookmark } from '../models/IBookmark';
import { IBookmarkPageRequest } from '../models/IBookmarkPageRequest';
import { IPagedQueryResult } from '../models/IPagedQueryResult';

// const baseApi: string = 'https://fts-bookmarks-api.azurewebsites.net/api/v1.0';
const baseApi: string = 'https://localhost:44351/api/v1.0';

export const getRecentBookmarksAsync = async (): Promise<IBookmark[]> => {
  const response = await fetch(`${baseApi}/bookmarks/recent/10`, {});

  const jsonResult = await response.json();
  return jsonResult.map((result: any) => ({
    id: result.id,
    uri: result.uri,
  }));
};

export const getBookmarkPage = async (
  request: IBookmarkPageRequest
): Promise<IPagedQueryResult> => {
  const response = await fetch(`${baseApi}/bookmarks/page`, {
    body: JSON.stringify(request),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  const jsonResult = await response.json();
  return {
    bookmarks: jsonResult.bookmarks.map((result: any) => ({
      dateCreated: result.dateCreated,
      description: result.metaDescription,
      iconUri: '',
      id: result.id,
      summary: result.metaDescription,
      title: result.title,
      uri: result.uri,
    })),
    requestContinuationToken: jsonResult.requestContinuationToken,
    totalCount: jsonResult.totalCount,
  };
};

export const saveUrl = async (url: string): Promise<void> => {
  const response = await fetch(`${baseApi}/bookmarks`, {
    body: JSON.stringify({ link: url }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
};
