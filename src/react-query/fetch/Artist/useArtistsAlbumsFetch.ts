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

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Item {
  album_group: string;
  album_type: string;
  artists: Artist[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
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

export const useArtistsAlbumsFetch = (artist_id: string, params?: Record<string, string>) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getArtistsAlbums'],
    queryFn: () =>
      getData(`/v1/artists/${artist_id}/albums`, params),
  });

  return { data, isLoading, isError, ...rest };
};


