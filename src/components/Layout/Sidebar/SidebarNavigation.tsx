import SearchResults from '../../UI/Search Results/SearchResults';
import { useState, useRef } from 'react';

const SidebarNavigation = ({ searchSongHandler }: {searchSongHandler: ((a: string) => void) | null}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | null>(null);
  const refHandler = () => {
    if (inputRef.current) {setSearchQuery(inputRef.current.value)};
  };


  return (
    <>
      <div className="shrink-0 hidden w-[230px] mx-6 mt-14 lg:inline-block">
        <section className="mt-10 flex">
          <input
            ref={inputRef}
            placeholder="Search"
            type="text"
            className="block px-4 py-2 bg-neutral-700 rounded-2xl text-cyan-50 w-full text-sm focus:outline-none"
            onChange={refHandler}
            // onChange={(event) => setSearchQuery(event.target.value)}
          />
        </section>
        <SearchResults
          searchQuery={searchQuery}
          searchSongHandler={searchSongHandler}
        />
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
