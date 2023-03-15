import Header from '../components/Layout/Header/Header';
import MusicPlayerNavigation from '../components/UI/Bottom Music Player Nav/MusicPlayerNavigation';
import PlaylistSongList from '../components/Layout/Music List/PlaylistSongList';
import SidebarNavigation from '../components/Layout/Sidebar/SidebarNavigation';
import PageInfo from '../components/Layout/TopPageInfo/PageInfo';
import { usePlaylistsFetch } from '../react-query/fetch/Playlist/usePlaylistFetch';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function PlaylistPage() {
  const [songData, setSongData] = useState(null);
  const params = useParams();

  const playlistData = usePlaylistsFetch(params.id!);

  if (playlistData.isLoading) {
    return <h1>Loading</h1>;
  }
  if (playlistData.isError) {
    return <h1>Error</h1>;
  }

  const findSongHandler = (ID) => {
    setSongData(null);
    setSongData(
      playlistData.data.tracks.items.find((song) => song.track.id === ID).track
    );
  };

  return (
    <>
      <Header />
      <div className="flex h-[calc(100%-10rem)] mb-24">
        <SidebarNavigation />
        <div>
          <PageInfo data={playlistData.data} />
          <PlaylistSongList
            songsData={playlistData.data.tracks}
            findSongHandler={findSongHandler}
          />
        </div>
      </div>
      <MusicPlayerNavigation songData={songData} />
    </>
  );
}
export default PlaylistPage;
