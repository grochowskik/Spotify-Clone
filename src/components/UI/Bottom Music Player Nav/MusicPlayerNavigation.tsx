import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../../store/store';
import {useRef} from 'react'
import { Artist } from '../../../react-query/fetch/Artist/useArtistFetch';

const MusicPlayerNavigation = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const playPause = useSelector((state: IRootState) => state);
  const dispatch = useDispatch();

  const playAudioHandler = () => {
    dispatch(actions.playPauseAudio(null))

    if (playPause.isPlaying) {
      audioRef.current!.pause()
    }
    if (!playPause.isPlaying) {
      audioRef.current!.play() 
    }
  };

  return (
    <div className=" bg-transparent backdrop-blur-xl backdrop-brightness-125 fixed bottom-0 h-20 grid grid-cols-3 w-screen">
      <audio ref={audioRef} src={playPause.audio}></audio>
      <div className="flex text-cyan-50 px-10 my-auto">
        {playPause.activeSong && (
          <>
            <p className="mr-2 line-clamp-1 overflow-hidden">
              {playPause.activeSong.artists.map((artist: Artist) => {
                return (
                  <a key={artist.id} href={'/artist/' + artist.id}>
                    {artist.name + ' '}
                  </a>
                );
              })}
            </p>
            <p>-</p>
            <p className="ml-2 line-clamp-1">{playPause.activeSong.name}</p>

            <FavoriteIcon
              color="secondary"
              className="hover:text-neutral-300 cursor-pointer mx-2"
              sx={{ fontSize: 24 }}
            />
          </>
        )}
      </div>
      <div className="flex gap-6 justify-center my-auto">
        <a className="my-auto">
          <ShuffleIcon
            fontSize="medium"
            color="secondary"
            className="hover:text-neutral-300 cursor-pointer"
          />
        </a>
        <a className="my-auto">
          <SkipPreviousIcon
            fontSize="large"
            color="secondary"
            className="hover:text-neutral-300 cursor-pointer"
          />
        </a>
        <a className="my-auto" onClick={playAudioHandler}>
          {playPause.isPlaying && (
            <PauseIcon
              fontSize="large"
              color="secondary"
              className="hover:text-neutral-300 cursor-pointer"
            />
          )}
          {!playPause.isPlaying && (
            <PlayArrowIcon
              fontSize="large"
              color="secondary"
              className="hover:text-neutral-300 cursor-pointer"
            />
          )}
        </a>
        <a className="my-auto">
          <SkipNextIcon
            fontSize="large"
            color="secondary"
            className="hover:text-neutral-300 cursor-pointer"
          />
        </a>
        <a className="my-auto">
          <RepeatIcon
            fontSize="medium"
            color="secondary"
            className="hover:text-neutral-300 cursor-pointer"
          />
        </a>
      </div>
      <div className="my-auto text-end px-10 hidden lg:block">
        <input
          type="range"
          name="volume"
          min="0"
          max="100"
          step="1"
          // className="appearance-none bg-purple-800 opacity-70 hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default MusicPlayerNavigation;
