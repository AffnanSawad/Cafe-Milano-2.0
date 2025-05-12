import { useEffect } from "react";
import { useState } from "react";
import Coffe_card from "../Coffee_card/Coffe_card";


const Coffee_Cards = ({handleAddCart,handlePrice}) => {

    
    const [coffecards,setcoffeecards] = useState([]);


    useEffect(   
        
        ()=> {

            fetch('data.json')
            .then(res=>res.json())
            .then(data=>setcoffeecards(data))
        }
        
        ,

        []
    )
  

    return (
        <div className="coffes-container">

            
             

      {/* <h1>h1 :{coffecards.length} </h1> */}

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 px-4 md:px-6 lg:px-10 mt-6 mb-10">
  {
    coffecards.map(coffecard => (
      <Coffe_card
        key={coffecard.id}
        coffecard={coffecard}
        handleAddCart={handleAddCart}
        handlePrice={handlePrice}
      />
    ))
  }
</div>


        </div>
    );
};

export default Coffee_Cards;