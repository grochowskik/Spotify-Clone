import { useQuery } from 'react-query';
import { getData } from '../../../services/ApiSlice';

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  height?: number;
  url: string;
  width?: number;
}

export interface Owner {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface Tracks {
  href: string;
  total: number;
}

export interface Item {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color?: any;
  public?: any;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export interface Playlists {
  href: string;
  items: Item[];
  limit: number;
  next?: any;
  offset: number;
  previous: string;
  total: number;
}

export interface FeaturedPlaylistsProps {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  primary_color?: any;
  public?: any;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export const useFeaturedPlaylistFetch = (params?: Record<string, string>) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getFeaturedPlaylist'],
    queryFn: () => getData('/v1/browse/featured-playlists', params),
  });

  return { data, isLoading, isError, ...rest };
};
