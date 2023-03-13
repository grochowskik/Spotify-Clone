function AlbumsGrid({ albumData }) {
  return (
    <>
      <section className="grid text-cyan-200 col-start-2 col-span-5 grid-cols-4 font-['Proxima Nova']">
        {albumData.items[0].available_markets && (
          <p className="col-span-4 border-b-2 border-zinc-400 text-xl mx-4 px-2">
            Latest realeses
          </p>
        )}
        {albumData.items.map((album) => {
          return (
            <div key={album.id} className="mx-auto my-4 ">
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
        <button className="m-4 px-5 py-1 rounded-2xl bg-purple-800 hover:bg-purple-700 cursor-pointer text-cyan-50 text-xl ">
          See more
        </button>
      </div>
    </>
  );
}
export default AlbumsGrid;
