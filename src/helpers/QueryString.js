import QueryString from 'query-string';

export function useQuery() {
  return QueryString.parse(window.location.search)
}