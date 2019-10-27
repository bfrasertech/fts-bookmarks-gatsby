import { IBookmark } from '../models/IBookmark';

export const getRecentBookmarksAsync = async (): Promise<IBookmark[]> => {
  const response = await fetch(
    'https://fts-bookmarks-api.azurewebsites.net/api/v1.0/bookmarks/recent/10',
    {}
  );

  const jsonResult = await response.json();
  return jsonResult.map((result: any) => ({
    id: result.id,
    uri: result.uri,
  }));
};

export class BookmarkService {
  public getRecentBookmarks() {
    return fetch(
      'https://fts-bookmarks-api.azurewebsites.net/api/v1.0/bookmarks/recent/10'
    )
      .then(results => results.json())
      .then((data: any) => {
        data.map(
          (result: any): IBookmark => {
            return {
              dateCreated: new Date(),
              description: '',
              iconUri: '',
              id: result.id,
              summary: '',
              title: '',
              uri: result.uri,
            };
          }
        );
      });
  }
}
