import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useArtistFetch = (artist_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getArtist'],
    queryFn: () => getData(`/v1/artists/${artist_id}/`),
  });

  return { data, isLoading, isError, ...rest };
};
