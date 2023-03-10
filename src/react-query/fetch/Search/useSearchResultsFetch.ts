import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useSearchResultsFetch = () => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getSearchResults'],
    queryFn: () => getData('/v1/search'),
  });

  return { data, isLoading, isError, ...rest };
};
