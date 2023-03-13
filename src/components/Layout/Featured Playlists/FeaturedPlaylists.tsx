function FeaturedPlaylists({ featuredPlaylists }) {
  return (
    <>
      <section className="grid text-cyan-50 col-start-2 col-span-5 grid-cols-4 mt-8">
        <p className="col-span-4 text-zinc-500 font-mono border-b-2 border-zinc-700 text-2xl">
          Something for your taste
        </p>
        {featuredPlaylists.items.map((playlist) => {
          return (
            <a
              href={'/playlist/' + playlist.id}
              key={playlist.id}
              className="mx-auto my-4 text-zinc-300 font-mono "
            >
              <img
                src={playlist.images[0].url}
                width="300"
                alt="playlist cover"
              />
              <p className="text-md">{playlist.name}</p>
            </a>
          );
        })}
      </section>
      <div className="col-start-2 col-span-5 text-center">
        <button className="mx-4 px-4 py-1 rounded-2xl bg-purple-900 hover:bg-purple-800 cursor-pointer text-cyan-50 text-2xl">
          See more
        </button>
      </div>
    </>
  );
}
export default FeaturedPlaylists;
