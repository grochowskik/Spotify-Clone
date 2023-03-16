import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState, useRef, useEffect } from 'react';

function MusicPlayerNavigation({ activeSongData }) {
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const audioRef = useRef();

  useEffect(() => {
    if(activeSongData) {
      setPlaying(true);
      audioRef.current!.play();
    }
  }, [activeSongData?.id])

  const playPauseHandler = () => {
    if (!isPlaying && activeSongData){
      setPlaying(true);
      audioRef.current!.play();
    } 
    if (isPlaying && activeSongData) {
      setPlaying(false);
      audioRef.current!.pause();
    } 
  };

  return (
    <div className=" bg-transparent backdrop-blur-xl backdrop-brightness-125 fixed bottom-0 h-20 grid grid-cols-3 w-screen">
      <audio ref={audioRef} src={activeSongData?.preview_url} preload="none" />
      <div className="flex text-cyan-50 px-10 my-auto">
        {activeSongData && (
          <>
            <p className="mr-2 line-clamp-1 overflow-hidden">
              {activeSongData.artists.map((artist) => {
                return (
                  <a key={artist.id} href={'/artist/' + artist.id}>
                    {artist.name + ' '}
                  </a>
                );
              })}
            </p>
            <p>-</p>
            <p className="ml-2 line-clamp-1">{activeSongData.name}</p>

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
        <a className="my-auto" onClick={playPauseHandler}>
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
