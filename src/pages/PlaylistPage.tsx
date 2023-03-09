import Header from '../components/Layout/Header/Header';
import MusicPlayerNavigation from '../components/UI/Bottom Music Player Nav/MusicPlayerNavigation';
import MusicList from '../components/Layout/Music List/MusicList';
import SidebarNavigation from '../components/Layout/Sidebar/SidebarNavigation';
import PageInfo from '../components/Layout/Artist and Playlist Info/PageInfo';

function PlaylistPage() {
  return (
    <>
      <Header />

      <div className="grid grid-cols-7 h-[calc(100%-10rem)] mb-24">
        <SidebarNavigation />

        <PageInfo />
        <MusicList />
      </div>
      <MusicPlayerNavigation />
    </>
  );
}
export default PlaylistPage;
