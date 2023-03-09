import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useArtistFetch = () => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['artist'],
    queryFn: () => getData('/v1/artists/0TnOYISbd1XYRBk9myaseg/'),
  });

  return { data, isLoading, isError, ...rest };
};
