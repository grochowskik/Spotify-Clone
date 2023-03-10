import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useUserPlaylistFetch = (user_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getUserPlaylist'],
    queryFn: () => getData(`https://api.spotify.com/v1/users/${user_id}/playlists`),
  });

  return { data, isLoading, isError, ...rest };
};
