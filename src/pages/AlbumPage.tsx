import Header from '../components/Layout/Header/Header';
import MusicPlayerNavigation from '../components/UI/Bottom Music Player Nav/MusicPlayerNavigation';
import MusicList from '../components/Layout/Music List/MusicList';
import SidebarNavigation from '../components/Layout/Sidebar/SidebarNavigation';
import PageInfo from '../components/Layout/TopPageInfo/PageInfo';
import { useAlbumFetch } from '../react-query/fetch/Albums/useAlbumFetch';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function AlbumPage() {
  const [songData, setSongData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const params = useParams();
  const albumData = useAlbumFetch(params.id!);

  if (albumData.isLoading) {
    return <h1>Loading</h1>;
  }
  if (albumData.isError) {
    return <h1>Error</h1>;
  }

  const searchSongHandler = (ID) => {
    setSearchData(null);
    setSearchData(albumData.data.tracks.items.find(({ id }) => id === ID));
  };

  const findSongHandler = (ID) => {
    setSongData(null);
    setSongData(albumData.data.tracks.items.find(({ id }) => id === ID));
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
            />
          </div>
        </div>
        <MusicPlayerNavigation songData={songData} />
      </div>
    </>
  );
}
export default AlbumPage;
