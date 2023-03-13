import Header from '../components/Layout/Header/Header';
import MusicPlayerNavigation from '../components/UI/Bottom Music Player Nav/MusicPlayerNavigation';
import MusicList from '../components/Layout/Music List/MusicList';
import SidebarNavigation from '../components/Layout/Sidebar/SidebarNavigation';
import PageInfo from '../components/Layout/TopPageInfo/PageInfo';
import { useAlbumFetch } from '../react-query/fetch/Albums/useAlbumFetch';
import { useParams } from 'react-router-dom';

function AlbumPage() {
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
      <Header />

      <div className="grid grid-cols-7 h-[calc(100%-10rem)] mb-24">
        <SidebarNavigation />

        <PageInfo data={albumData.data} />
        <MusicList songsData={albumData.data.tracks} />
      </div>
      <MusicPlayerNavigation />
    </>
  );
}
export default AlbumPage;
