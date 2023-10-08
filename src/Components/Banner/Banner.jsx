const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full min-h-[250px] md:min-h-[400px]">
        <img src="https://i.ibb.co/VQMT0YD/banner-2.jpg" className="w-full" />
        <div className="absolute text-center space-y-5 transform -translate-y-1/2 left-5 right-5 top-1/2">
          <h2 className="text-6xl md:text-8xl font-bold text-teal-600">Welcome</h2>
          <p className="text-2xl md:text-3xl font-bold text-blue-900">
            A Match Made in Heaven
          </p>
          <button className="btn rounded-full bg-teal-600 text-white px-10 hover:bg-pink-800">
            DISCOVER NOW
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle bg-blue-400 text-white">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-blue-400 text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/tHTMSyr/banner.jpg"
          className="w-full"
        />
        <div className="absolute text-center space-y-10 transform -translate-y-1/2 left-5 right-5 top-1/2">
          <h2 className="text-6xl md:text-8xl font-bold text-pink-600">Welcome</h2>
          <p className="text-2xl md:text-3xl font-bold text-sky-800">
            MAGIC SPACE FOR CHILDREN
          </p>
          <button className="btn rounded-full bg-pink-600 text-white px-10 hover:bg-pink-800">
            DISCOVER NOW
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-blue-400 text-white">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-blue-400 text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/wWgHkcD/banner-3.jpg"
          className="w-full"
        />
        <div className="absolute text-center space-y-10 transform -translate-y-1/2 left-5 right-5 top-1/2">
          <h2 className="text-6xl md:text-8xl font-bold text-sky-600">Welcome</h2>
          <p className="text-2xl md:text-3xl font-bold text-sky-800">
          A Bundle of Joy is on the Way
          </p>
          <button className="btn rounded-full bg-sky-600 text-white px-10 hover:bg-sky-800">
            DISCOVER NOW
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-blue-400 text-white">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-blue-400 text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/SKzGg7X/banner-4.jpg"
          className="w-full"
        />
        <div className="absolute text-center space-y-10 transform -translate-y-1/2 left-5 right-5 top-1/2">
          <h2 className="text-6xl md:text-8xl font-bold text-red-700">Welcome</h2>
          <p className="text-2xl md:text-3xl font-bold text-white">
          A Symphony of Colors
          </p>
          <button className="btn rounded-full bg-red-700 text-white px-10 hover:bg-red-800">
            DISCOVER NOW
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle bg-blue-400 text-white">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-blue-400 text-white">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
