import FavoriteIcon from '@mui/icons-material/Favorite';

function PageInfo({ data }) {
  return (
    <>
      <section className="flex text-cyan-50 col-start-2 col-span-5 h-40 my-8 justify-between mx-16">
        <div className="flex ">
          {data.images[0].url && (
            <img
              src={data.images[0].url}
              className="rounded-full border-2 border-purple-900"
            />
          )}
          <div className="my-auto mx-6">
            <span className="text text-6xl font-semibold">{data.name}</span>
            <div className="flex mt-4">
              {data.artists && (
                <a href={'/artist/' + data.artists[0].id} className="mr-8">
                  {data.artists[0].name}
                </a>
              )}
              {data.tracks && (
                <span className="mr-8">
                  {data.tracks.total.toLocaleString('us')} songs
                </span>
              )}
              {data.followers && (
                <span>
                  {data.followers.total.toLocaleString('us')} followers
                </span>
              )}
            </div>
          </div>
        </div>
        <FavoriteIcon
          className="my-auto hover:text-purple-600"
          sx={{ fontSize: 64 }}
        />
      </section>
    </>
  );
}
export default PageInfo;
