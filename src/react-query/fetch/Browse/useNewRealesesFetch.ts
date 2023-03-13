import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useNewRealesesFetch = (params?: Record<string, string>) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getNewRealeses'],
    queryFn: () => getData('/v1/browse/new-releases', params),
  });

  return { data, isLoading, isError, ...rest };
};
