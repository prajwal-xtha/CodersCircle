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
<p className="flex justify-center items-center h-[40px] w-[290px] mb-6 rounded-3xl border border-blue-200 bg-transparent font-mono text-[15px]">
  <span className="text-blue-200">
    &gt;_&nbsp;&nbsp;&gt;
  </span>
  &nbsp;&nbsp;Welcome to the circle
</p>


        <h1 className="text-7xl font-bold text-center">
          Where  Code  Meets <br />
          <span
            className="text-6xl font-extrabold tracking-tight leading-tight
           bg-gradient-to-r from-blue-500 via-sky-200 to-purple-500 
           bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(0,189,248,0.8)]"
          >
            Community
          </span>
        </h1>
        <p className="w-[700px] text-center text-[25px] text-gray-500  drop-shadow-[0_0_50px_rgba(0,189,248,0.8)]">
          Join a passionate community of developers, learners, and innovators.
          Build, learn, and grow together at Coding Circle
        </p>
        <div className="pt-8">
          <button
            className="pr-8  pl-8 pt-3 pb-3 rounded-xl bg-gradient-to-r from-blue-500 via-sky-500 to-purple-500
               text-black font-bold shadow-lg
               cursor-pointer
               drop-shadow-[0_0_50px_rgba(0,189,248,0.8)]
               transition-all duration-300"
          >
            Join the circle  ➔
          </button>
          <button className="pr-8 ml-5 pl-8 pt-3 pb-3 cursor-pointer rounded-xl bg-transparent text-white border border-blue-300">
            Learn more
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
