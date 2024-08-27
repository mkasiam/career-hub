import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center gap-8">
      {/* Banner Text Content  */}
      <div className="w-1/2 space-y-4">
        <h1 className="text-6xl font-bold">
          One Step<br></br> Closer To Your<br></br>
          <span className="text-[#7F8FFE] ">Dream Job</span>
        </h1>
        <p className="font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn btn-primary bg-[#8885FF]">Get Started</button>
      </div>
      {/* Banner Image Content  */}
      <div className="w-1/2">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
