import React from 'react';
import Cart from '../Cart/Cart';

const My_cart = ({addcart}) => {
    return (
        <div>
            <h1 className='text-2xl font-extrabold m-10 text-amber-700'>My Cart :{addcart.length} </h1>

            


         <div className='ml-16  '>
         <tr>
       
       <th className='pl-16'>Name</th>
       <th className='pl-12'>Calories</th>
       <th className='pl-10'>Cook Time</th>
     </tr>
         </div>

      <div className=' border-black border-2 ml-10'>

      {
            addcart.map( cart =><Cart
            
            key={cart.id}

            cart={cart}
            
            ></Cart> )
        }

      </div>
          
        </div>
    );
};

export default My_cart;