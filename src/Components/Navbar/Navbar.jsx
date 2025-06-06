

const Navbar = () => {
    return (
        <div className="Nav-Container mt-5">
             

      
             <div className="navbar bg-base-100">
  <div className="flex-1 ">
    <a className="btn btn-ghost text-3xl font-extrabold text-amber-800 pr-4 ">Cafe-Milano</a>

  </div>
  <div className="flex-none  ml-6 mr-5 pr-10 gap-2">
    <div className="form-control ml-8 mr-5">
      <input type="text" placeholder="Search" className="input input-bordered w-20 ml-10  md:w-auto" />
    </div>
    <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        
        <button className="btn btn-error pl-5">Log In</button>


      </div>
      
    </div>
  </div>
</div>




        </div>
    );
};

export default Navbar;