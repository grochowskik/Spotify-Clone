import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useFeaturedPlaylistFetch = () => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getFeaturedPlaylist'],
    queryFn: () => getData('/v1/browse/featured-playlists'),
  });

  return { data, isLoading, isError, ...rest };
};
