function Landing() {
  return (
    <>
      <div className="items-center flex justify-center h-screen w-screen bg-gray-950 text-white">
        <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm">
  <source src="../../public/background.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      {/* <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover">
  <source src="/your-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> */}
<div className="z-1 flex flex-col items-center ">

        <p className=" flex justify-center h-[40px]  items-center w-[240px] rounded-4xl bg-gray-900 font-bold">
          <span className="text-violet-500 font-bold">
            &gt;_&nbsp;&nbsp;&gt;
          </span>
          &nbsp;&nbsp;Welcome to the circle
        </p>

        <h1 className="text-6xl font-bold text-center">
          Where Code Meets <br />
          <span
            className="text-6xl font-extrabold tracking-tight leading-tight
           bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500
           bg-clip-text text-transparent"
          >
            Community
          </span>
        </h1>
        <p className="w-[600px] text-center text-[20px] font-bold text-gray-500">
          Join a passionate community of developers, learners, and innovators.
          Build, learn, and grow together at Coding Circle
        </p>
        <div className="pt-8">
          <button
            className="pr-6  pl-6 pt-3 pb-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500
               text-white shadow-lg
               hover:from-blue-500 hover:via-purple-400 hover:to-pink-400
               transition-all duration-300"
          >
            join the circle
          </button>
          <button className="pr-6 ml-5 pl-6 pt-3 pb-3 rounded-2xl bg-white text-black">
            learn more
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
