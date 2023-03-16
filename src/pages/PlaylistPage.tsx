import Header from '../components/Layout/Header/Header';
import MusicPlayerNavigation from '../components/UI/Bottom Music Player Nav/MusicPlayerNavigation';
import PlaylistSongList from '../components/Layout/Music List/PlaylistSongList';
import SidebarNavigation from '../components/Layout/Sidebar/SidebarNavigation';
import PageInfo from '../components/Layout/TopPageInfo/PageInfo';
import { usePlaylistsFetch, Item } from '../react-query/fetch/Playlist/usePlaylistFetch';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


function PlaylistPage() {
  const [isActive, setIsActive] = useState(false);
  const [activeSongData, setActiveSongData] = useState(null);
  const params = useParams();

  const playlistData = usePlaylistsFetch(params.id!);

  if (playlistData.isLoading) {
    return <h1>Loading</h1>;
  }
  if (playlistData.isError) {
    return <h1>Error</h1>;
  }

  const findSongHandler = (ID: string) => {
    setActiveSongData(
      playlistData.data.tracks.items.find((song: Item) => song.track.id === ID).track
    );
    if (isActive) {setIsActive(false)}
    if (!isActive) {setIsActive(true)}
  };
  console.log(playlistData.data.tracks.items)
  return (
    <>
      <Header />
      <div className="flex h-[calc(100%-10rem)] mb-24">
        <SidebarNavigation searchSongHandler={null}/>
        <div>
          <PageInfo images={playlistData.data.images} name={playlistData.data.name} artists={null} tracks={playlistData.data.tracks} followers={playlistData.data.followers} />
          <PlaylistSongList
            songs={playlistData.data.tracks.items}
            findSongHandler={findSongHandler}
            isActive={isActive}
          />
        </div>
      </div>
      <MusicPlayerNavigation activeSongData={activeSongData} />
    </>
  );
}
export default PlaylistPage;
