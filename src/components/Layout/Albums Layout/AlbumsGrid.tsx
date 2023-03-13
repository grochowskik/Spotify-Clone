function AlbumsGrid({albumData}) {

  return (
    <>
      <section className="grid text-cyan-50 col-start-2 col-span-5 grid-cols-4 mt-8">
        {(albumData.items[0].available_markets) && <p className='col-span-4 text-zinc-500 font-mono border-b-2 border-zinc-700 text-2xl'>Check out latest realeses</p>}
        {albumData.items.map(album => {
            return (
            <div key={album.id} className='mx-auto my-4 text-zinc-300 font-mono'>
                <a href={'/album/' + album.id}>
                    <img  src={album.images[0].url} width='300' alt="album cover"/>
                    <p className='text-md'>{album.name}</p>
                </a>
                <section className='text-sm'>{album.artists.map((artist) => {
                    return (<a href={'/artist/' + artist.id} key={artist.id}>{artist.name}</a>)
                })}</section>
            </div>)
    })}
      </section>
        <div className="col-start-2 col-span-5 text-center">
            <button className='mx-4 px-4 py-1 rounded-2xl bg-purple-900 hover:bg-purple-800 cursor-pointer text-cyan-50 text-2xl'>See more</button>
        </div>
    </>
  );
};
export default AlbumsGrid;
