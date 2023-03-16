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
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Albums {
  href: string;
  items: Item[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface Followers {
  href?: any;
  total: number;
}

export interface Item2 {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Artists {
  href: string;
  items: Item2[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface Artist2 {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Album {
  album_group: string;
  album_type: string;
  artists: Artist2[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist3 {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalIds {
  isrc: string;
}

export interface Item3 {
  album: Album;
  artists: Artist3[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Tracks {
  href: string;
  items: Item3[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface SearchResultsProps {
  albums: Albums;
  artists: Artists;
  tracks: Tracks;
}

export const useSearchResultsFetch = (query: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getSearchResults'],
    queryFn: () =>
      getData('/v1/search', {
        q: query,
        type: 'artist,track,album',
        limit: '4',
      }),
  });

  return { data, isLoading, isError, ...rest };
};
