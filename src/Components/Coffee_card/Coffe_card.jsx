import { FaFireAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";


const Coffe_card = ({coffecard,handleAddCart,handlePrice}) => {

    const {id,image,title,price,description,cook_time,calories}=coffecard;


    

    return (
        <div>
           


           <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-extrabold text-amber-700">
      {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className="font-semibold font-bold">{description} </p>

    <p 
    
    
    
    className="text-2xl font-extrabold"> ${price} </p>

    <hr />

    <div className="flex justify-between">
     
    
    <h2 className=""><FaFireAlt />  {calories} calories </h2>

    
    <h1> <IoIosTime />  {cook_time}minutes  </h1>

    </div>
    


  <div className="flex gap-5">
   
     <button 
    
    onClick={()=>handleAddCart(coffecard)}

    
    
    className="btn btn-error mt-5  text-white">Add To Cart</button>
    


    <button  className="btn btn-warning mt-5"> Remove The Cart </button>



  </div>
</div>







  </div>

        </div>
    );
};

export default Coffe_card;