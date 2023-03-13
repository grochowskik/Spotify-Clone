import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useArtistsAlbumsFetch = (artist_id: string, params?: Record<string, string>) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getArtistsAlbums'],
    queryFn: () =>
      getData(`/v1/artists/${artist_id}/albums`, params),
  });

  return { data, isLoading, isError, ...rest };
};


