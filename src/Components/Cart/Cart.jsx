

const Cart = ({cart}) => {
    return (
        <div> 

<div className="overflow-x-auto ml-10">
  <table className="table text-xl font-bold ">
    {/* head */}
    
    <tbody>
      {/* row 1 */}
      <tr className="">
         
        <td> {cart.title} </td>
        <td> {cart.calories}cal </td>
        <td>{cart.cook_time}min </td>
      </tr>
      
    </tbody>
  </table>
</div>
     
      
      

        </div>



    );
};

export default Cart;