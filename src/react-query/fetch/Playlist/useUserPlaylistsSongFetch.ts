import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useUserPlaylistsSongFetch = (playlist_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getUserPlaylistsSong'],
    queryFn: () => getData(`/v1/users/${playlist_id}/tracks`),
  });

  return { data, isLoading, isError, ...rest };
};
