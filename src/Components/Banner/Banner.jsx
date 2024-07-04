

const Banner = () => {
    return (
        <div className="banner-container mb-10 mt-5 rounded-xl ">
             

             <div
  className="hero min-h-screen  "
 
 
  style={{
    backgroundImage: "url(https://i.ibb.co/wY5d2Pw/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables.jpg)",
  }}>



  <div className="hero-overlay bg-opacity-60 "></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-amber-600">Hello there</h1>
      <p className="mb-5 font-bold text-white">
      Cafe Milano is an elegant Italian restaurant in Washington D.C., known for its upscale ambiance, delicious cuisine, and high-profile clientele.
      </p>
      <button className="btn btn-error">Welcome!</button>
    </div>
  </div>
</div>
      

        </div>
    );
};

export default Banner;