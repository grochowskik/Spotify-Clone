import SearchIcon from '@mui/icons-material/Search';
import { useSearchResultsFetch } from '../../../react-query/fetch/Search/useSearchResultsFetch';

function SidebarNavigation() {
  return (
    <>
      <div className="hidden relative w-[230px] mx-6 mt-14 lg:block">
        <section className="my-10 flex mb-32">
          {/* <label>Szukaj</label> */}
          <input
            placeholder="Szukaj"
            className=" px-4 py-1 mx-2 bg-neutral-700 rounded-2xl text-cyan-50 w-max text-sm focus:outline-none"
          />
          <SearchIcon fontSize="large" color="secondary" />
        </section>
        <section className="grid gap-4 text-cyan-50 mb-12">
          <a className=" px-4 py-1 rounded-2xl bg-purple-800 hover:bg-purple-700 cursor-pointer font-medium text-s">
            Favourites
          </a>
          <a className="px-4 py-1 rounded-2xl bg-purple-800 hover:bg-purple-700 cursor-pointer font-medium">
            New Playlist
          </a>
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
