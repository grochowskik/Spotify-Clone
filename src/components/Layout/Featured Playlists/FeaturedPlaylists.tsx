function FeaturedPlaylists({ featuredPlaylists }) {
  return (
    <>
      <section className="grid text-cyan-50 col-start-2 col-span-5 grid-cols-4 mt-12 font-['Proxima Nova']">
        <p className="col-span-4 text-zinc-500 border-b-2 border-zinc-700 text-2xl mx-4">
          Something for your taste
        </p>
        {featuredPlaylists.items.map((playlist) => {
          return (
            <a
              href={'/playlist/' + playlist.id}
              key={playlist.id}
              className="mx-auto my-4 text-zinc-300"
            >
              <img
                src={playlist.images[0].url}
                width="300"
                alt="playlist cover"
                className="rounded-xl"
              />
              <p className="text-md mt-2">{playlist.name}</p>
            </a>
          );
        })}
      </section>
      <div className="col-start-2 col-span-5 text-center font-['Proxima Nova']">
        <button className="m-4 px-5 py-1 rounded-2xl bg-purple-900 hover:bg-purple-800 cursor-pointer text-cyan-50 text-xl">
          See more
        </button>
      </div>
    </>
  );
}
export default FeaturedPlaylists;
