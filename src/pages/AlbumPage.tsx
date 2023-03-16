import Header from '../components/Layout/Header/Header';
import MusicPlayerNavigation from '../components/UI/Bottom Music Player Nav/MusicPlayerNavigation';
import MusicList from '../components/Layout/Music List/MusicList';
import SidebarNavigation from '../components/Layout/Sidebar/SidebarNavigation';
import PageInfo from '../components/Layout/TopPageInfo/PageInfo';
import { useAlbumFetch } from '../react-query/fetch/Albums/useAlbumFetch';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function AlbumPage() {
  const [isActive, setIsActive] = useState(false);
  const [activeSongData, setActiveSongData] = useState(null);

  const params = useParams();
  const albumData = useAlbumFetch(params.id!);

  if (albumData.isLoading) {
    return <h1>Loading</h1>;
  }
  if (albumData.isError) {
    return <h1>Error</h1>;
  }

  // const searchSongHandler = (ID) => {
  //   setActiveSongData(albumData.data.tracks.items.find(({ id }) => id === ID));
  // };

  const findSongHandler = (ID) => {
    setActiveSongData(albumData.data.tracks.items.find(({ id }) => id === ID));
    if (isActive) {setIsActive(false)}
    if (!isActive) {setIsActive(true)}
  };

  return (
    <>
      <div className="">
        <Header />
        <div className="flex h-[calc(100%-10rem)] mb-24">
          <SidebarNavigation searchSongHandler={searchSongHandler} />
          <div>
            <PageInfo data={albumData.data} />
            <MusicList
              songsData={albumData.data.tracks}
              findSongHandler={findSongHandler}
              isActive={isActive}
            />
          </div>
        </div>
        <MusicPlayerNavigation activeSongData={activeSongData} isActive={isActive}/>
      </div>
    </>
  );
}
export default AlbumPage;
