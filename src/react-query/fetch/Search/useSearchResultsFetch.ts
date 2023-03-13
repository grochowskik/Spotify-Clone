import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useSearchResultsFetch = (query: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getSearchResults'],
    queryFn: () =>
      getData('/v1/search', {
        q: query,
        type: 'artist,track,album',
        limit: '4',
      }),
  });

  return { data, isLoading, isError, ...rest };
};
