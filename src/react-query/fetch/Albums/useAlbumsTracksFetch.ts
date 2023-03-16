import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export interface ExternalUrls {
  spotify: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Item {
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface RootObject {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}



export const useAlbumsTracksFetch = (albums_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getAlbumsTracks'],
    queryFn: () => getData(`/v1/albums/${albums_id}/tracks`),
  });

  return { data, isLoading, isError, ...rest };
};
