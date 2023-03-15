function FeaturedPlaylists({ featuredPlaylists }) {
  return (
    <>
      <section className="w-[100%-230px] text-cyan-200 mt-12 font-['Proxima Nova'] mx-auto sm:mx-12 2xl:mx-0 text-left xs:text-center">
        <p className="border-b-2 border-cyan-400 text-xl mx-4 px-2 text-left">
          Your favourite songs
        </p>
        {featuredPlaylists.items.map((playlist) => {
          return (
            <a
              href={'/playlist/' + playlist.id}
              key={playlist.id}
              className="inline-flex xs:inline-grid mt-4 p-2 lg:p-4 [&>p]:hover:visible xl:[&>p]:invisible xl:[&>p]:hover:visible mx-4 md:mx-2"
            >
              <figure className="overflow-hidden w-[100px] xs:w-[175px] md:w-[300px] rounded-xl ">
                <img
                  src={playlist.images[0].url}
                  width="300"
                  alt="playlist cover"
                  className="rounded-xl transition ease-in-out duration-300 w-[100px] xs:w-[175px] md:w-[300px] sm:hover:scale-110"
                />
              </figure>
              <p className="text-sm my-auto text-left xs:text-md md:text-lg xs:text-center mx-4 xs:mx-0">
                {playlist.name}
              </p>
            </a>
          );
        })}
      </section>
      <div className="col-start-2 col-span-5 text-center font-['Proxima Nova']">
        <button className="m-4 px-5 py-1 rounded-2xl bg-purple-800 hover:bg-purple-700 cursor-pointer text-cyan-50 text-xl">
          See more
        </button>
      </div>
    </>
  );
}
export default FeaturedPlaylists;
