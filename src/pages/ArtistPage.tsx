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

function ArtistPage() {
  const params = useParams();

  const artistTopSongsData = useArtistTopSongsFetch(params.id!);
  const artistAlbumsData = useArtistsAlbumsFetch(params.id!, {
    limit: '4',
    offset: '0',
  });

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
  console.log(artistData.data);

  return (
    <>
      <div>
        <Header />
        <div className="grid grid-cols-7 h-[calc(100%-10rem)] mb-24">
          <SidebarNavigation />

          <PageInfo data={artistData.data} />
          <AlbumsGrid albumData={artistAlbumsData.data} />

          <MusicList songsData={artistTopSongsData.data} />
        </div>
        <MusicPlayerNavigation />
      </div>
    </>
  );
}
export default ArtistPage;
