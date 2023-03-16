import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../../store/index';
import {
  SongsProps,
  Artist,
} from '../../../react-query/fetch/Artist/useArtistFetch';

interface Props {
  songs: Array<SongsProps>;
  findSongHandler: (a: string) => void;
  isActive: boolean;
}

const MusicList = ({ songs, findSongHandler, isActive }: Props) => {
  const playPause = useSelector((state) => state);
  const dispatch = useDispatch();
  const changeActiveSong = (event: any) => {
    const elementID = (event.currentTarget as HTMLElement).id;
    if (elementID) {
      findSongHandler(elementID);
    }
  };

  const playPauseHandler = () => {
    dispatch(actions.playPause());
  };

  console.log(playPause.isPlaying);
  return (
    <>
      <section className="mt-8 mx-2 sm:mx-12">
        {songs.map((song: any) => {
          const minutes = Math.floor(song.duration_ms / 1000 / 60);
          const seconds = song.duration_ms / 1000 - minutes * 60;
          return (
            <div
              id={song.id}
              key={song.id}
              className="inline-flex justify-between border-t-2 border-zinc-700 hover:backdrop-brightness-[1.4] py-4 rounded w-full sm:w-[100%-230px]"
            >
              <div className="flex">
                <a
                  id={song.id}
                  className="mx-2 sm:mx-6 my-auto"
                  onClick={playPauseHandler}
                >
                  {!playPause.isPlaying && (
                    <PlayArrowIcon
                      fontSize="large"
                      color="inherit"
                      className="hover:text-purple-600 text-neutral-100 cursor-pointer"
                    />
                  )}
                  {playPause.isPlaying && (
                    <PauseIcon
                      fontSize="large"
                      color="inherit"
                      className="hover:text-purple-600 text-neutral-100 cursor-pointer"
                    />
                  )}
                </a>
                <section className="flex text-cyan-50 px-1 my-auto items-start text-left">
                  <div className="line-clamp-1 mx-1">
                    {song.artists.map((artist: Artist) => {
                      return (
                        <a
                          key={artist.id}
                          href={'/artist/' + artist.id}
                          className="mx-1 "
                        >
                          {artist.name}
                        </a>
                      );
                    })}
                  </div>
                  <a>-</a>
                  <p className="mx-1 sm:mx-2 line-clamp-1">{song.name}</p>
                </section>
              </div>
              <div className="my-auto mx-6 hidden sm:flex">
                <FavoriteIcon
                  color="inherit"
                  className="hover:text-purple-600 text-neutral-100 cursor-pointer mr-2"
                />
                <a className=" text-cyan-50">{`${minutes}:${Math.round(
                  seconds
                ).toLocaleString('en-US', {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}`}</a>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MusicList;
