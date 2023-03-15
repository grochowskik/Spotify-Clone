import { BASE_API_URL, options } from '../../../services/ApiSlice';
import { useEffect, useState } from 'react';

function SearchResults({ searchQuery, searchSongHandler }) {
  const [data, setData] = useState(null);

  const path = '/v1/search';
  const params = {
    q: searchQuery,
    type: 'artist,track,album',
    limit: '4',
  };
  const url = new URL(path, BASE_API_URL);
  const searchParams = new URLSearchParams(params);

  useEffect(() => {
    if (searchQuery) {
      fetch(`${url.toString()}?${searchParams.toString()}`, options)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [searchQuery]);

  return (
    <>
      {data && (
        <section className="bg-cyan-50 rounded-b-lg text-cyan-900 absolute w-[230px] z-30 text-sm">
          <div className="text-zinc-500 font-['Proxima Nova'] border-b-[1px] border-zinc-700"></div>
          {data.tracks.items?.map((category) => {
            return (
              <section
                id={category.id}
                key={category.id}
                className="px-1 m-1"
                onClick={(event) => searchSongHandler(event.currentTarget.id)}
              >
                <div className="font-semibold truncate ">{category.name}</div>
                <div className="truncate text-xs">
                  {category.artists.map((artist) => {
                    return (
                      <a key={artist.id} href={'/artist/' + artist.id}>
                        {artist.name + ' '}
                      </a>
                    );
                  })}
                </div>
              </section>
            );
          })}
          <div className="text-zinc-500 font-['Proxima Nova'] border-b-[1px] border-zinc-700"></div>
          {data.artists.items?.map((category) => {
            return (
              <a
                href={'/artist/' + category.id}
                key={category.id}
                className="flex p-2 align-middle"
              >
                {category.images[0] && (
                  <img
                    src={category.images[0].url}
                    className="rounded-full w-[60px] h-[60px]"
                  />
                )}
                <p className="truncate font-semibold my-auto mx-3">
                  {category.name}
                </p>
              </a>
            );
          })}
          <div className="text-zinc-500 font-['Proxima Nova'] border-b-[1px] border-zinc-700 "></div>
          {data.albums.items?.map((category) => {
            return (
              <div className="grid grid-flow-col justify-start p-2">
                <a href={'/album/' + category.id} className="font-semibold">
                  {category.images[0] && (
                    <img
                      src={category.images[0].url}
                      className="rounded-full w-[60px] h-[60px]"
                    />
                  )}
                </a>
                <div className="my-auto mx-3 text-left">
                  <p className="line-clamp-1 overflow-hidden">
                    <a href={'/album/' + category.id} className="font-semibold">
                      {category.name}
                    </a>
                  </p>
                  <p className="line-clamp-1">
                    {category.artists.map((artist) => {
                      return (
                        <a
                          key={artist.id}
                          className=" text-xs"
                          href={'/artist/' + artist.id}
                        >
                          {artist.name + ' '}
                        </a>
                      );
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
}

export default SearchResults;
