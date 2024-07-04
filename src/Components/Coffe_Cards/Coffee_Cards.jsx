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

      <div className="grid grid-cols-1 ml-2 mt-4 mb-10  md:grid-cols-2 gap-5 lg:grid-cols-2 gap-4">

    {
        coffecards.map(coffecard=><Coffe_card
        
        coffecard={coffecard}
       
        key={coffecard.id}


        handleAddCart={handleAddCart}

        handlePrice={handlePrice}
        
        ></Coffe_card>)
    }

      </div>

        </div>
    );
};

export default Coffee_Cards;