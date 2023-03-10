import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useFeaturedPlaylistFetch = (artist_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['artist'],
    queryFn: () => getData('/v1/browse/featured-playlists'),
  });

  return { data, isLoading, isError, ...rest };
};
