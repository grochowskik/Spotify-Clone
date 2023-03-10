import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Carousel } from 'react-responsive-carousel';

const AlbumCarousel = () => {
  return (
    <>
      <section className="grid text-cyan-50 col-start-2 col-span-5 h-40 mx-10 mb-8">
        <div className='flex my-auto justify-between'>
          <ArrowBackIosIcon
            className="my-auto hover:text-purple-600"
            sx={{ fontSize: 64 }}
          />
          <div>
            <div >
              <p>Album Cover1</p>
              <p>Album Title</p>
            </div>
            <div>
              <p>Album Cover2</p>
              <p>Album Title</p>
            </div>
            <div>
              <p>Album Cover3</p>
              <p>Album Title</p>
            </div>
            <div>
              <p>Album Cover4</p>
              <p>Album Title</p>
            </div>
            <div>
              <p>Album Cover4</p>
              <p>Album Title</p>
            </div>
            <div>
              <p>Album Cover4</p>
              <p>Album Title</p>
            </div>
            <div>
              <p>Album Cover4</p>
              <p>Album Title</p>
            </div>
          </div>
          <ArrowForwardIosIcon
            className="my-auto hover:text-purple-600"
            sx={{ fontSize: 64 }}
          />
           </div>
      </section>

    </>
  );
};
export default AlbumCarousel;
