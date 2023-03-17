import Header from '../components/Layout/Header/Header';
import MusicPlayerNavigation from '../components/UI/Bottom Music Player Nav/MusicPlayerNavigation';
import MusicList from '../components/Layout/Music List/MusicList';
import SidebarNavigation from '../components/Layout/Sidebar/SidebarNavigation';
import PageInfo from '../components/Layout/TopPageInfo/PageInfo';
import { useAlbumFetch } from '../react-query/fetch/Albums/useAlbumFetch';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function AlbumPage() {
  const [activeSongData, setActiveSongData] = useState(null);

  const params = useParams();
  const albumData = useAlbumFetch(params.id!);

  if (albumData.isLoading) {
    return <h1>Loading</h1>;
  }
  if (albumData.isError) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <div className="">
        <Header />
        <div className="flex h-[calc(100%-10rem)] mb-24">
          <SidebarNavigation />
          <div>
            <PageInfo
              images={albumData.data.images}
              name={albumData.data.name}
              artists={albumData.data.artists}
              tracks={albumData.data.tracks}
              followers={null}
            />
            <MusicList
              songs={albumData.data.tracks.items}
            />
          </div>
        </div>
        <MusicPlayerNavigation />
      </div>
    </>
  );
}
export default AlbumPage;
