const Banner = () => {
  return (
    <div className="carousel w-full h-[70vh] md:h-[90vh]">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/3YC3NChN/close-up-barista-making-cappuccino-bartender-preparing-coffee-drink.jpg"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-4">
          <h2 className="text-3xl md:text-5xl font-bold">Start Your Day With Fresh Coffee</h2>
          <p className="text-sm md:text-lg mt-2">Brewed with passion, served with love.</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/8gwqBC9Q/coffee-machine-with-coffee-cup-cafe.jpg"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-4">
          <h2 className="text-3xl md:text-5xl font-bold">Barista Crafted Perfection</h2>
          <p className="text-sm md:text-lg mt-2">Experience the art of coffee making.</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/WvQ8K46y/coffee-machine-pours-freshly-coffee-white-cup.jpg"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center p-4">
          <h2 className="text-3xl md:text-5xl font-bold">Fresh Beans, Rich Taste</h2>
          <p className="text-sm md:text-lg mt-2">Sourced from the finest farms.</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

     
    </div>
  );
};

export default Banner;
