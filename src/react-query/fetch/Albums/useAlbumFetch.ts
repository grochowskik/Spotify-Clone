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

export interface Copyright {
  text: string;
  type: string;
}

export interface ExternalIds {
  upc: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface LinkedFrom {
  external_urls: ExternalUrls;
  href: string;
  id: string;
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
  linked_from: LinkedFrom;
}

export interface Tracks {
  href: string;
  items: Item[];
  limit: number;
  next?: any;
  offset: number;
  previous?: any;
  total: number;
}

export interface Album {
  album_group: string;
  album_type: string;
  artists: Artist[];
  copyrights: Copyright[];
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  genres: any[];
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  tracks: Tracks;
  type: string;
  uri: string;
}

export interface Followers {
  href?: any;
  total: number;
}

export interface Props {
  artists: Artist[] | null;
  images: Image[];
  name: string;
  tracks: Tracks | null;
  followers: Followers | null;
}

export interface MusicPlayerProps {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  episode: boolean;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track: boolean;
  track_number: number;
  type: string;
  uri: string;
}

export const useAlbumFetch = (albums_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getAlbum'],
    queryFn: () => getData(`/v1/albums/${albums_id}`),
  });

  return { data, isLoading, isError, ...rest };
};
