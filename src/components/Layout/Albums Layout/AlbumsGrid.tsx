function AlbumsGrid({ albumData }) {
  return (
    <>
      <section className="grid text-cyan-50 col-start-2 col-span-5 grid-cols-4 font-['Proxima Nova']">
        {albumData.items[0].available_markets && (
          <p className="col-span-4 text-zinc-500 border-b-2 border-zinc-700 text-2xl mx-4">
            Check out latest realeses
          </p>
        )}
        {albumData.items.map((album) => {
          return (
            <div key={album.id} className="mx-auto my-4 text-zinc-300 ">
              <a href={'/album/' + album.id}>
                <img
                  src={album.images[0].url}
                  width="300"
                  alt="album cover"
                  className="rounded-xl"
                />
                <p className="text-md mt-2">{album.name}</p>
              </a>
              <section className="text-sm">
                {album.artists.map((artist) => {
                  return (
                    <a href={'/artist/' + artist.id} key={artist.id}>
                      {artist.name + ' '}
                    </a>
                  );
                })}
              </section>
            </div>
          );
        })}
      </section>
      <div className="col-start-2 col-span-5 text-center font-['Proxima Nova']">
        <button className="m-4 px-5 py-1 rounded-2xl bg-purple-900 hover:bg-purple-800 cursor-pointer text-cyan-50 text-xl ">
          See more
        </button>
      </div>
    </>
  );
}
export default AlbumsGrid;
