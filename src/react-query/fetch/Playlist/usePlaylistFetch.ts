import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const usePlaylistsFetch = (playlist_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getPlaylists'],
    queryFn: () => getData(`/v1/playlists/${playlist_id}`),
  });

  return { data, isLoading, isError, ...rest };
};
