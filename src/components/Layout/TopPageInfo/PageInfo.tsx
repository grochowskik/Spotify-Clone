import FavoriteIcon from '@mui/icons-material/Favorite';
import { Props } from '../../../react-query/fetch/Albums/useAlbumFetch';


const PageInfo = ({ images,name,artists,tracks,followers }: Props) => {

  return (
    <>
      <section className="flex text-cyan-50 h-40 my-8 justify-between mx-0  sm:mx-16 sm:w-[100%-230px] ">
        <div className="flex ">
          {images && (
            <img
              src={images[0].url}
              className="rounded-full border-2 border-purple-900 hidden sm:block"
            />
          )}
          <div className="my-auto mx-4 sm:mx-6">
            <span className="text-3xl font-semibold">{name}</span>
            <div className="flex mt-4">
              {artists && (
                <a href={'/artist/' + artists[0].id} className="mr-8">
                  {artists[0].name}
                </a>
              )}
              {tracks && (
                <span className="mr-8">
                  {tracks.total.toLocaleString('us')} songs
                </span>
              )}
              {followers && (
                <span>
                  {followers.total.toLocaleString('us')} followers
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="sm:mx-0 mr-4 my-auto hover:text-purple-600 hidden xs:block cursor-pointer">
          <FavoriteIcon sx={{ fontSize: 44 }} />
        </div>
      </section>
    </>
  );
}
export default PageInfo;
