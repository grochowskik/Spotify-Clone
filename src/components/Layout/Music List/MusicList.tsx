import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useAlbumsTracksFetch } from '../../../react-query/fetch/Albums/useAlbumsTracksFetch';

function MusicList() {
  const {data, isLoading, isError} = useAlbumsTracksFetch('4aawyAB9vmqN3uQ7FjRGTy');

  if (isLoading) return <h1>...Loading</h1>;
  if (isError) return <h1>...Error</h1>;

  console.log(data)

  return (
    <>
      <section className="mt-8 col-start-2 col-span-5">
        {data.items.map((song) => {
          const minutes = Math.floor(song.duration_ms / 1000 / 60);
          const seconds = song.duration_ms / 1000 - minutes * 60;
          return (
            <div
              key={song.id}
              className="flex justify-between border-spacing-1 border-t-2 border-zinc-700 h-16 hover:bg-neutral-700 rounded "
            >
              <div className="flex ">
                <a className="my-auto">
                  <PlayArrowIcon
                    fontSize="large"
                    color="inherit"
                    className="hover:text-purple-600 mx-6 text-neutral-100 cursor-pointer"
                  />
                </a>
                <div className=" text-cyan-50 px-1 my-auto items-start">
                  <a className="mx-4">{song.artists[0].name}</a>
                  <a>-</a>
                  <a className="mx-4">{song.name}</a>
                </div>
              </div>
              <div className="my-auto">
                <FavoriteIcon
                  color="inherit"
                  className="hover:text-purple-600 mx-6 text-neutral-100 cursor-pointer"
                />
                <a className=" text-cyan-50 mx-6">{`${minutes}:${Math.round(
                  seconds
                )}`}</a>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default MusicList;
