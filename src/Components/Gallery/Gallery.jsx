const Gallery = () => {
  return (
    <div className="my-20 md:max-w-6xl mx-auto px-20 md:px-0" id="gallery">
      <div className="grid justify-center">
        <h3 className="text-4xl md:text-5xl text-center font-bold text-teal-700 mb-10">
          Gallery
        </h3>
        <img
          src="https://i.ibb.co/h8mFv3M/line-light-purple.png"
          className="mb-10 px-20"
          alt=""
        />
      </div>
      <div className="grid md:grid-cols-3 gap-5 ">
        <div className="hero">
          <img src="https://i.ibb.co/RTDpqzb/gallery-1.jpg" alt="" />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <p className="mb-5">FRIDAY, Oct 6, 2022</p>
              <h1 className="mb-5 text-3xl font-semibold">Birthday Party</h1>
            </div>
          </div>
        </div>
        <div className="hero">
          <img src="https://i.ibb.co/0DBV40g/gallery-2.jpg" alt="" />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <p className="mb-5">SATURDAY, FEB 28, 2022</p>
              <h1 className="mb-5 text-3xl font-bold">Engagement Party</h1>
            </div>
          </div>
        </div>
        <div className="hero">
          <img src="https://i.ibb.co/NC53v2t/gallery-3.jpg" alt="" />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <p className="mb-5">WEDNESDAY, DEC 12, 2022</p>
              <h1 className="mb-5 text-3xl font-bold">Holiday Party</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-5 mt-5">
        <div className="hero">
          <img className="md:h-[300px]" src="https://i.ibb.co/HtRtwwz/gallery-4.jpg" alt="" />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <p className="mb-5">FRIDAY, FEB 14, 2022</p>
              <h1 className="mb-5 text-3xl font-semibold">Weeding Party</h1>
            </div>
          </div>
        </div>
        <div className="hero col-span-2">
          <img className="md:h-[300px]" src="https://i.ibb.co/F3cKKSp/gallery-5.jpg"
            alt=""
          />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <p className="mb-5">SATURDAY, FEB 15, 2022</p>
              <h1 className="mb-5 text-3xl font-bold">Anniversary Party</h1>
            </div>
          </div>
        </div>
        <div className="hero">
          <img className="md:h-[300px]" src="https://i.ibb.co/5hJ3G1p/gallery01-06.jpg" alt="" />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <p className="mb-5">SUNDAY, FEB 12, 2022</p>
              <h1 className="mb-5 text-3xl font-bold">Housewarming Party</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-5">
        <div className="hero">
          <img src="https://i.ibb.co/BKhdp6M/gallery-8.jpg" alt="" />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <p className="mb-5">SATURDAY, FEB 14, 2022</p>
              <h1 className="mb-5 text-3xl font-semibold">Surprise Party</h1>
            </div>
          </div>
        </div>
        <div className="hero">
          <img src="https://i.ibb.co/qYF22Vf/gallery-7.jpg" alt="" />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <p className="mb-5">SATURDAY, MAR 15, 2022</p>
              <h1 className="mb-5 text-3xl font-bold">Reunion Party</h1>
            </div>
          </div>
        </div>
        <div className="hero">
          <img src="https://i.ibb.co/h1tN8q6/gallery-9.jpg" alt="" />
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <p className="mb-5">SUNDAY, FEB 8, 2022</p>
              <h1 className="mb-5 text-3xl font-bold">Dinner Party</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
