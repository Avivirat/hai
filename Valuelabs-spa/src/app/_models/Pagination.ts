export interface Pagination {
    CurrentPage: number;
    ItemsPerPage: number;
    TotalItems: number;
    TotalPages: number;
}
export class PaginationResult<T> {
  result: T;
  pagination: Pagination;

}
