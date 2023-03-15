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
  const [songData, setSongData] = useState(null);
  const params = useParams();

  const artistTopSongsData = useArtistTopSongsFetch(params.id!);
  const artistAlbumsData = useArtistsAlbumsFetch(params.id!, {
    limit: '4',
    offset: '0',
  });

  const findSongHandler = (ID) => {
    setSongData(null);
    setSongData(artistTopSongsData.data.tracks.find(({ id }) => id === ID));
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
        <SidebarNavigation />
        <div>
          <PageInfo data={artistData.data} />
          <AlbumsGrid albumData={artistAlbumsData.data} />
          <MusicList
            songsData={artistTopSongsData.data}
            findSongHandler={findSongHandler}
          />
        </div>
      </div>
      <MusicPlayerNavigation songData={songData} />
    </>
  );
}
export default ArtistPage;
