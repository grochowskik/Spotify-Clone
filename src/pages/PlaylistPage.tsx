import Header from '../components/Layout/Header/Header';
import MusicPlayerNavigation from '../components/UI/Bottom Music Player Nav/MusicPlayerNavigation';
import MusicList from '../components/Layout/Music List/MusicList';
import SidebarNavigation from '../components/Layout/Sidebar/SidebarNavigation';
import PageInfo from '../components/Layout/TopPageInfo/PageInfo';
import AlbumCarousel from '../components/Layout/TopPageInfo/AlbumCarousel';
function PlaylistPage() {
  return (
    <>
      <Header />

      <div className="grid grid-cols-7 h-[calc(100%-10rem)] mb-24">
        <SidebarNavigation />

        <PageInfo />
        <AlbumCarousel />
        <MusicList />
      </div>
      <MusicPlayerNavigation />
    </>
  );
}
export default PlaylistPage;
