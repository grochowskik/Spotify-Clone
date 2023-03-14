import { BASE_API_URL, options } from '../../../services/ApiSlice';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';

function SidebarNavigation() {
  const [searchQuery, setSearchQuery] = useState<string>('');
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
    const timeout = setTimeout(() => {
      if (searchQuery) {
        fetch(`${url.toString()}?${searchParams.toString()}`, options)
          .then((res) => res.json())
          .then((data) => setData(data));
      }
    }, 400);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  console.log(data);
  return (
    <>
      <div className=" hidden w-[230px] mx-6 mt-14 lg:block">
        <section className="mt-10 flex">
          <input
            placeholder="Search"
            type="text"
            className="block px-4 py-2 bg-neutral-700 rounded-2xl text-cyan-50 w-full text-sm focus:outline-none"
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </section>
        {data && (
          <section className="bg-cyan-50 opacity-90 rounded-b-lg text-cyan-900 absolute w-[230px]">
            dupsko
          </section>
        )}
        <section className=" text-cyan-50 mb-12 mt-32">
          <p className="px-4 py-1 my-2 rounded-2xl bg-purple-800 hover:bg-purple-700 cursor-pointer font-medium">
            Favourites
          </p>
          <p className="px-4 py-1 my-2 rounded-2xl bg-purple-800 hover:bg-purple-700 cursor-pointer font-medium">
            New Playlist
          </p>
        </section>
        <div className="text-zinc-500 font-['Proxima Nova'] border-b-[1px] border-zinc-700">
          <a className="relative left-5">Playlists</a>
        </div>
        <section className="grid">
          <a
            href="/artist"
            className=" text-cyan-50 border-b-[1px] border-zinc-700 h-10 leading-10 hover:backdrop-brightness-[1.4] px-1"
          >
            Ooh Eeh Ooh Ah Aah
          </a>
        </section>
      </div>
    </>
  );
}

export default SidebarNavigation;
