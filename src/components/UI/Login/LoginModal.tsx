const LoginModal = () => {
  return (
    <>
      <section className="fixed left-[calc(50%-16rem)] top-[calc(50%-15rem)] w-[32rem] h-[30rem] rounded-3xl bg-cyan-50 justify-between z-40">
        <div className="flex text-purple-600 text-4xl mt-8 justify-around font-medium">
          <a className="border-b-2 py-1 rounded border-purple-600 cursor-pointer">
            Login
          </a>
          <a className="py-1 rounded border-purple-600 cursor-pointer">
            Sign In
          </a>
        </div>
        <div className="grid gap-2 mt-12">
          <label className="relative left-[20%] text-purple-600 font-medium">
            Login
          </label>
          <input
            placeholder="login"
            className=" p-4 mx-auto bg-neutral-10 border-2 rounded-xl text-neutral-700 w-2/3 text-sm focus:outline-purple-600"
          />
          <label className="relative left-[20%] text-purple-600 font-medium ">
            Password
          </label>
          <input
            placeholder="password"
            className=" p-4 mx-auto bg-cyan-50 border-2 rounded-xl text-neutral-700 w-2/3 text-sm focus:outline-purple-600"
          />
          <button
            type="submit"
            className="p-3 mx-auto mt-4 bg-purple-600 text-cyan-50 rounded-xl w-2/3 text-2xl font-medium cursor-pointer  hover:bg-purple-800"
          >
            Login
          </button>
        </div>
      </section>
    </>
  );
}

export default LoginModal;
