import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useGetAlbum = (albums_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['artist'],
    queryFn: () => getData(`/v1/albums/${albums_id}`),
  });

  return { data, isLoading, isError, ...rest };
};
