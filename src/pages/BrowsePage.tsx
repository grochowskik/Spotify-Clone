import Header from '../components/Layout/Header/Header';
import MusicPlayerNavigation from '../components/UI/Bottom Music Player Nav/MusicPlayerNavigation';
import AlbumsGrid from '../components/Layout/Albums Layout/AlbumsGrid';
import FeaturedPlaylists from '../components/Layout/Featured Playlists/FeaturedPlaylists';
import SidebarNavigation from '../components/Layout/Sidebar/SidebarNavigation';
import { useFeaturedPlaylistFetch } from '../react-query/fetch/Browse/useFeaturedPlaylistFetch';
import { useNewRealesesFetch } from '../react-query/fetch/Browse/useNewRealesesFetch';
import { useState } from 'react';

function BrowsePage() {
  const [activeSongData, setActiveSongData] = useState(null);

  const featuredPlaylistData = useFeaturedPlaylistFetch({
    limit: '4',
    offset: '0',
  });
  const newReleasesData = useNewRealesesFetch({ limit: '4', offset: '0' });

  if (featuredPlaylistData.isLoading || newReleasesData.isLoading) {
    return <h1>Loading</h1>;
  }
  if (featuredPlaylistData.isError || newReleasesData.isError) {
    return <h1>Error</h1>;
  }

  const searchSongHandler = (ID: string) => {
    setActiveSongData(
      featuredPlaylistData.data.tracks.items.find(
        ({ id }: { id: string }) => id === ID
      )
    );
  };

  return (
    <>
      <Header />
      <div className="flex h-[calc(100%-10rem)] mb-24">
        <SidebarNavigation searchSongHandler={searchSongHandler} />

        <div>
          <FeaturedPlaylists
            items={featuredPlaylistData.data.playlists.items}
          />
          <AlbumsGrid items={newReleasesData.data.albums.items} />
        </div>
      </div>
      <MusicPlayerNavigation activeSongData={null} />
    </>
  );
}

export default BrowsePage;
