import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useAlbumsTracksFetch = (albums_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getAlbumsTracks'],
    queryFn: () => getData(`/v1/albums/${albums_id}/tracks`),
  });

  return { data, isLoading, isError, ...rest };
};
