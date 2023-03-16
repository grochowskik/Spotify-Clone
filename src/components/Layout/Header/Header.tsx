import LoginModal from '../../UI/Login/LoginModal';
import { useState } from 'react';

const Header = () => {
  const [isModal, setModal] = useState<boolean>(false);

  const displayModalHandler = () => {
    setModal((prevState) => !prevState);
  };

  return (
    <>
      {isModal && <LoginModal />}
      <header className="sticky top-0 w-screen h-20 text-cyan-50 text-xl bg-neutral-900 items-center flex justify-between z-10 ">
        <a href="/" className="ml-10 font-mono text-4xl cursor-pointer">
          DUGLERIFY
        </a>
        <span className="mr-20">
          <a
            href="/browse"
            className="mr-4 px-4 py-1 rounded-2xl bg-purple-800 hover:bg-purple-700 cursor-pointer"
          >
            Browse
          </a>
          <button
            onClick={displayModalHandler}
            className="mx-4 px-4 py-1 rounded-2xl bg-purple-800 hover:bg-purple-700 cursor-pointer"
          >
            Login
          </button>
        </span>
      </header>
    </>
  );
}

export default Header;
