

const Navbar = () => {
    return (
        <div className="Nav-Container mt-5">
             

      
             <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-4xl font-extrabold text-amber-800">Cafe-Milano</a>

  </div>
  <div className="flex-none  ml-4 gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24  md:w-auto" />
    </div>
    <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      
    </div>
  </div>
</div>




        </div>
    );
};

export default Navbar;