import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const PageInfo = () => {
  return (
    <>
      <section className="grid text-cyan-50 col-start-2 col-span-5 h-40 mx-10 my-8">
        <div className="flex justify-between mb-4 mx-16">
          <div className="grid gap-3 mt-8">
            <span className="text text-6xl font-semibold">Artist</span>
            <span>13 albums</span>
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