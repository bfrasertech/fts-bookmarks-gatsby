import { IBookmark } from './IBookmark';
export interface IPagedQueryResult {
  requestContinuationToken: string;
  bookmarks: IBookmark[];
  totalCount: number;
}
