import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export const useTrackFetch = (track_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getTrack'],
    queryFn: () => getData(`/v1/tracks/{${track_id}`),
  });

  return { data, isLoading, isError, ...rest };
};
