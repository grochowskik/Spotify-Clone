import SearchIcon from '@mui/icons-material/Search';

function SidebarNavigation() {
  return (
    <>
      <div className="absolute mx-6 mt-14">
        <section className="my-10 flex mb-32">
          {/* <label>Szukaj</label> */}
          <input
            placeholder="Szukaj"
            className=" px-4 py-1 mx-2 bg-neutral-700 rounded-2xl text-cyan-50 w-max text-sm focus:outline-none"
          />
          <SearchIcon fontSize="large" color="secondary" />
        </section>
        <section className="grid gap-4 text-cyan-50 mb-12">
          <a className=" px-4 py-1 rounded-2xl bg-purple-900 hover:bg-purple-800 cursor-pointer font-medium text-s">
            Favourites
          </a>
          <a className="px-4 py-1 rounded-2xl bg-purple-900 hover:bg-purple-800 cursor-pointer font-medium">
            New Playlist
          </a>
        </section>
        <div className="text-zinc-500 font-mono border-b-2 border-zinc-700">
          <a className="relative left-5">Playlists</a>
        </div>
        <section className="grid">
          <a
            href="/artist"
            className=" text-cyan-50 border-b-2 border-zinc-700 h-10 leading-10 hover:bg-neutral-700 px-1"
          >
            Ooh Eeh Ooh Ah Aah
          </a>
        </section>
      </div>
    </>
  );
}

export default SidebarNavigation;
