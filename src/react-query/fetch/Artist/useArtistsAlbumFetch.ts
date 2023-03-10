import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useArtistsAlbumFetch = (artist_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getArtistsAlbums'],
    queryFn: () =>
      getData(`/v1/artists/${artist_id}/albums`, {
        market: 'ES',
      }),
  });

  return { data, isLoading, isError, ...rest };
};


