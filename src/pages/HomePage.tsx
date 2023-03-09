import Header from '../components/Layout/Header/Header';
import LoginModal from '../components/UI/Login and Singin/LoginModal';

function HomePage() {
  return (
    <>
      <Header />
      {/* <LoginModal /> */}
      <audio
        controls
        src="https://api.spotify.com/v1/tracks/3cHyrEgdyYRjgJKSOiOtcS"
      />
      <a
        href="https://api.spotify.com/v1/tracks/3cHyrEgdyYRjgJKSOiOtcS"
        className="w-96"
      ></a>
    </>
  );
}

export default HomePage;
