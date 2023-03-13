import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function PageInfo({data}) {

  return (
    <>
      <section className='grid text-cyan-50 col-start-2 col-span-5 h-40 mx-10 my-8'>
        <div className="flex justify-between mb-4 mx-16">
          <div className="grid gap-3 mt-8">
            <span className="text text-6xl font-semibold">{data.name}</span>
            <div className='flex'>
            {data.artists && <a href={'/artist/' + data.artists[0].id} className='mr-8'>{data.artists[0].name}</a>}
            {data.tracks && <span className='mr-8'>{data.tracks.total.toLocaleString('us')} songs</span>}
            {data.followers && <span> {data.followers.total.toLocaleString('us')} followers</span>}
            </div>
          </div>
          <PlayArrowIcon
            className="my-auto hover:text-purple-600"
            sx={{ fontSize: 64 }}
          />
        </div>
      </section>
    </>
  );
};
export default PageInfo;
