import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useUserPlaylistFetch = (user_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['artist'],
    queryFn: () => getData(`/v1/users/${user_id}/playlists`),
  });

  return { data, isLoading, isError, ...rest };
};
