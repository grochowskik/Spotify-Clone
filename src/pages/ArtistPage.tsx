import Header from '../components/Layout/Header/Header';
import MusicPlayerNavigation from '../components/UI/Bottom Music Player Nav/MusicPlayerNavigation';
import MusicList from '../components/Layout/Music List/MusicList';
import SidebarNavigation from '../components/Layout/Sidebar/SidebarNavigation';
import PageInfo from '../components/Layout/TopPageInfo/PageInfo';
import AlbumsGrid from '../components/Layout/Albums Layout/AlbumsGrid';
import { useArtistTopSongsFetch } from '../react-query/fetch/Artist/useArtistTopSongsFetch';
import { useArtistsAlbumsFetch } from '../react-query/fetch/Artist/useArtistsAlbumsFetch';
import { useArtistFetch } from '../react-query/fetch/Artist/useArtistFetch';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function ArtistPage() {
  const [activeSongData, setActiveSongData] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const params = useParams();

  const artistTopSongsData = useArtistTopSongsFetch(params.id!);
  const artistAlbumsData = useArtistsAlbumsFetch(params.id!, {
    limit: '4',
    offset: '0',
  });

  const searchSongHandler = (ID: string) => {
    setActiveSongData(
      artistTopSongsData.data.tracks.items.find(
        ({ id }: { id: string }) => id === ID
      )
    );
  };

  const findSongHandler = (ID: string) => {
    setActiveSongData(
      artistTopSongsData.data.tracks.find(({ id }: { id: string }) => id === ID)
    );
    if (isActive) {
      setIsActive(false);
    }
    if (!isActive) {
      setIsActive(true);
    }
  };

  const artistData = useArtistFetch(params.id!);

  if (
    artistAlbumsData.isLoading ||
    artistTopSongsData.isLoading ||
    artistData.isLoading
  ) {
    return <h1>Loading</h1>;
  }
  if (
    artistAlbumsData.isError ||
    artistTopSongsData.isError ||
    artistData.isError
  ) {
    return <h1>Error</h1>;
  }
  return (
    <>
      <Header />
      <div className="flex h-[calc(100%-10rem)] mb-24">
        <SidebarNavigation searchSongHandler={searchSongHandler} />
        <div>
          <PageInfo
            images={artistData.data.images}
            name={artistData.data.name}
            artists={artistData.data.artists}
            tracks={null}
            followers={artistData.data.followers}
          />
          <AlbumsGrid items={artistAlbumsData.data.items} />
          <MusicList
            songs={artistTopSongsData.data.tracks}
            findSongHandler={findSongHandler}
            isActive={isActive}
          />
        </div>
      </div>
      <MusicPlayerNavigation activeSongData={activeSongData} />
    </>
  );
}
export default ArtistPage;
