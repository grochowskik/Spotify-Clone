import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

const useArtistTopSongsFetch = () => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['topSongs'],
    queryFn: () =>
      getData('/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks', {
        market: 'ES',
      }),
  });

  return { data, isLoading, isError, ...rest };
};

export default useArtistTopSongsFetch;
