function AlbumsGrid({ albumData }) {
  return (
    <>
      <section className="w-[100%-230px] text-cyan-200 font-['Proxima Nova'] sm:mx-12 2xl:mx-0 text-left xs:text-center">
        {albumData.items[0].available_markets && (
          <p className="border-b-2 border-zinc-400 text-xl mx-4 px-2">
            Latest realeses
          </p>
        )}
        {albumData.items.map((album) => {
          return (
              <a className="inline-flex xs:inline-grid mt-4 p-2 [&>a>p]:hover:visible md:[&>div>p]:invisible md:[&>div>p]:hover:visible lg:p-4 mx-4 md:mx-2" key={album.id} href={'/album/' + album.id}>
              <figure className="overflow-hidden w-[100px] xs:w-[175px] md:w-[300px] rounded-xl">
                <img
                  src={album.images[0].url}
                  alt="album cover"
                  className="rounded-xl transition ease-in-out duration-300 w-[100px] xs:w-[175px] md:w-[300px] sm:hover:scale-110"
                />
              </figure>
              <div className="my-auto text-left xs:text-center mx-4 xs:mx-0">
              <p className="text-md mt-2 text-ellipsis">{album.name}</p>
              <p className="text-sm">
                {album.artists.map((artist) => {
                  return (
                    <a href={'/artist/' + artist.id} key={artist.id}>
                      {artist.name + ' '}
                     </a>
                    );
                  })}
                </p>
            </div>
              </a>
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
