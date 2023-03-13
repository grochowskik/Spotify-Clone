import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

function MusicList({ songsData }) {
  const [isPlaying, setPlaying] = useState();

  const songs = songsData.tracks ?? songsData.items;
  return (
    <>
      <section className="mt-8 col-start-2 col-span-5">
        {songs.map((song: any) => {
          const minutes = Math.floor(song.duration_ms / 1000 / 60);
          const seconds = song.duration_ms / 1000 - minutes * 60;
          return (
            <div
              key={song.id}
              className="flex justify-between border-spacing-1 border-t-2 border-zinc-700 h-16 hover:bg-neutral-700 rounded "
            >
              <div className="flex ">
                <a className="my-auto">
                  {!isPlaying && (
                    <PlayArrowIcon
                      fontSize="large"
                      color="inherit"
                      className="hover:text-purple-600 mx-6 text-neutral-100 cursor-pointer"
                    />
                  )}
                  {isPlaying && (
                    <PauseIcon
                      fontSize="large"
                      color="inherit"
                      className="hover:text-purple-600 mx-6 text-neutral-100 cursor-pointer"
                    />
                  )}
                </a>
                <div className=" text-cyan-50 px-1 my-auto items-start">
                  <a href={'/artist/' + song.artists[0].id} className="mx-4">
                    {song.artists[0].name}
                  </a>
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
}

export default MusicList;
