import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

function PlaylistSongList({ songsData, findSongHandler }) {
  const [isPlaying, setPlaying] = useState<boolean>(false);

  return (
    <>
      <section className="mt-8 mx-2 sm:mx-12">
        {songsData.items.map((song: any) => {
          const minutes = Math.floor(song.track.duration_ms / 1000 / 60);
          const seconds = song.track.duration_ms / 1000 - minutes * 60;
          return (
            <div
              key={song.track.id}
              className="inline-flex justify-between border-spacing-1 border-t-2 border-zinc-700 h-16 hover:backdrop-brightness-[1.4] py-4 rounded w-full sm:w-[100%-230px]"
            >
              <div className="flex">
                <a
                  id={song.track.id}
                  className="mx-2 sm:mx-6 my-auto"
                  onClick={(event) => findSongHandler(event.currentTarget.id)}
                >
                  {!isPlaying && (
                    <PlayArrowIcon
                      fontSize="large"
                      color="inherit"
                      className="hover:text-purple-600 text-neutral-100 cursor-pointer"
                    />
                  )}
                  {isPlaying && (
                    <PauseIcon
                      fontSize="large"
                      color="inherit"
                      className="hover:text-purple-600 text-neutral-100 cursor-pointer"
                    />
                  )}
                </a>
                <section className="flex text-cyan-50 px-1 my-auto items-start sm:text-md">
                  <div className=" line-clamp-1">
                    {song.track.artists.map((artist) => {
                      return (
                        <a
                          key={artist.id}
                          href={'/artist/' + artist.id}
                          className="mx-1"
                        >
                          {artist.name}
                        </a>
                      );
                    })}
                  </div>
                  <a>-</a>
                  <p className="mx-1 sm:mx-2">{song.track.name}</p>
                </section>
              </div>
              <div className="my-auto mx-6 hidden sm:flex">
                <FavoriteIcon
                  color="inherit"
                  className="hover:text-purple-600 text-neutral-100 cursor-pointer mr-2"
                />
                <a className=" text-cyan-50">
                  {`${minutes}:${Math.round(seconds).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                  })}`}
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default PlaylistSongList;
