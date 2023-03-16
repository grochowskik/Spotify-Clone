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
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export const useUserPlaylistFetch = (user_id: string) => {
  const { data, isLoading, isError, ...rest } = useQuery({
    queryKey: ['getUserPlaylist'],
    queryFn: () =>
      getData(`https://api.spotify.com/v1/users/${user_id}/playlists`),
  });

  return { data, isLoading, isError, ...rest };
};
