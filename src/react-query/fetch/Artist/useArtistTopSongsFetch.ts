import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useArtistTopSongsFetch = (artist_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getArtistTopSongs'],
    queryFn: () =>
      getData(`/v1/artists/${artist_id}/top-tracks`, {
        market: 'ES',
      }),
  });

  return { data, isLoading, isError, ...rest };
};
