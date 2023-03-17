import Header from '../components/Layout/Header/Header';
import MusicPlayerNavigation from '../components/UI/Bottom Music Player Nav/MusicPlayerNavigation';
import PlaylistSongList from '../components/Layout/Music List/PlaylistSongList';
import SidebarNavigation from '../components/Layout/Sidebar/SidebarNavigation';
import PageInfo from '../components/Layout/TopPageInfo/PageInfo';
import { usePlaylistsFetch } from '../react-query/fetch/Playlist/usePlaylistFetch';
import { useParams } from 'react-router-dom';

function PlaylistPage() {
  const params = useParams();

  const playlistData = usePlaylistsFetch(params.id!);

  if (playlistData.isLoading) {
    return <h1>Loading</h1>;
  }
  if (playlistData.isError) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <Header />
      <div className="flex h-[calc(100%-10rem)] mb-24">
        <SidebarNavigation />
        <div>
          <PageInfo
            images={playlistData.data.images}
            name={playlistData.data.name}
            artists={null}
            tracks={playlistData.data.tracks}
            followers={playlistData.data.followers}
          />
          <PlaylistSongList
            songs={playlistData.data.tracks.items}

          />
        </div>
      </div>
      <MusicPlayerNavigation />
    </>
  );
}
export default PlaylistPage;
