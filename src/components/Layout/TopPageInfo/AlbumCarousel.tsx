import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { useState } from 'react'

function AlbumCarousel({artistData}) {

  console.log(artistData)

  const [index, setIndex] = useState<number>(0); 
    
  const handlePrevious = () => {
    setIndex((prevIndex) => {prevIndex - 1});
  };
    
  const handleNext = () => {
    setIndex((prevIndex) => {prevIndex + 1});
  };
    

  return (
    <>
      {/* <section className="grid text-cyan-50 col-start-2 col-span-5 h-40 mx-10 mb-8">
        <div className='grid grid-flow-col gap-2 my-auto '>
          <ArrowBackIosIcon
            className="my-auto hover:text-purple-600"
            sx={{ fontSize: 64 }}
          />
          {artistData.items.map((album: any) => { 
            return (
            <a href={'/album/' + album.id} key={album.id} className='cursor-pointer'>
              <img src={album.images[0].url} alt="album cover"/>
              <p>{album.name}</p>
            </a>)})}
          <ArrowForwardIosIcon
            className="my-auto hover:text-purple-600"
            sx={{ fontSize: 64 }}
          />
        </div>
      </section> */}
      <section className="grid text-cyan-50 col-start-2 col-span-5 h-40 mx-10 mb-8">
        <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={12}
        totalSlides={artistData.total}
        >
        <ButtonBack>Back</ButtonBack>
        <Slider>
          {artistData.items.map((album: any) => { 
          return ( 
          <Slide index={0}>
            <a href={'/album/' + album.id} key={album.id} className='flex cursor-pointer'>
              <img src={album.images[0].url} alt="album cover"/>
              <p>{album.name}</p>
            </a></Slide>)})}
        </Slider>
        <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </section> 
    </>
  );
};
export default AlbumCarousel;
