function Header() {
  return (
    <header className="sticky top-0 w-screen h-20 text-cyan-50 text-xl bg-neutral-900 items-center flex justify-around z-10 ">
      <a href="/" className="mx-6 font-mono text-4xl cursor-pointer">
        DUGLERIFY
      </a>
      <span>
        <a
          href="/browse"
          className="mx-4 px-4 py-1 rounded-2xl bg-purple-900 hover:bg-purple-800 cursor-pointer"
        >
          Listen
        </a>
        <a
          href="/artist"
          className="mx-4 px-4 py-1 rounded-2xl bg-purple-900 hover:bg-purple-800 cursor-pointer"
        >
          Login
        </a>
      </span>
    </header>
  );
}

export default Header;
