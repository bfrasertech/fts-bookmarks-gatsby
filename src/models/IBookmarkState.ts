import { IBookmark } from './IBookmark';

export interface IBookmarkState {
  bookmarks: IBookmark[];
  recentBookmarksLoading: boolean;
  recentBookmarksLoaded: boolean;
}
