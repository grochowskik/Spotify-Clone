function AlbumsGrid({ albumData }) {
  return (
    <>
      <section className="w-[100%-230px] text-cyan-200 font-['Proxima Nova'] sm:mx-12 2xl:mx-0 text-center">
        {albumData.items[0].available_markets && (
          <p className="border-b-2 border-zinc-400 text-xl mx-4 px-2 text-left">
            Latest realeses
          </p>
        )}
        {albumData.items.map((album) => {
          return (
            <section
              key={album.id}
              className="inline-flex xs:inline-grid mt-4 p-2 [&>p]:hover:visible md:[&>p]:invisible md:[&>p]:hover:visible [&>a>p]:hover:visible md:[&>a>p]:invisible md:[&>a>p]:hover:visible lg:p-4 mx-4 md:mx-2"
            >
              <a href={'/album/' + album.id}>
                <figure className="overflow-hidden w-[100px] xs:w-[175px] md:w-[300px] rounded-xl">
                  <img
                    src={album.images[0].url}
                    alt="album cover"
                    className="rounded-xl transition ease-in-out duration-300 w-[100px] xs:w-[175px] md:w-[300px] sm:hover:scale-110"
                  />
                </figure>
                <p className="text-md mt-2 text-ellipsis">{album.name}</p>
              </a>

              <p className="text-sm my-auto text-left xs:text-center mx-4 xs:mx-0">
                {album.artists.map((artist) => {
                  return (
                    <a href={'/artist/' + artist.id} key={artist.id}>
                      {artist.name + ' '}
                    </a>
                  );
                })}
              </p>
            </section>
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
