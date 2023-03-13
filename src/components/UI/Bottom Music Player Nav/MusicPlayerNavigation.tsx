import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { useState } from 'react';
import { useTrackFetch } from '../../../react-query/fetch/Tracks/useTrackFetch';

function MusicPlayerNavigation() {
  const [isPlaying, setPlaying] = useState<boolean>(false);

  // const { data, isLoading, isError } = useTrackFetch('');

  // if (isLoading) {
  //   return <h1>Loading</h1>;
  // }
  // if (isError) {
  //   return <h1>Error</h1>;
  // }

  const playSongHandler = () => {
    setPlaying((prevState) => !prevState);
  };

  return (
    <div className=" bg-neutral-900 fixed bottom-0 h-20 grid grid-cols-3 w-screen">
      <div className=" text-cyan-50 px-10 my-auto">
        Starszy x Oesa - Nasze Bloki
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
        <a onClick={playSongHandler} className="my-auto">
          {isPlaying && (
            <PauseIcon
              fontSize="large"
              color="secondary"
              className="hover:text-neutral-300 cursor-pointer"
            />
          )}
          {!isPlaying && (
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
      <div className="my-auto text-end px-10 ">
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
}

export default MusicPlayerNavigation;
