import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useFeaturedPlaylistFetch = (params?: Record<string, string>) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getFeaturedPlaylist'],
    queryFn: () => getData('/v1/browse/featured-playlists', params),
  });

  return { data, isLoading, isError, ...rest };
};
