import React from 'react'


function Summary(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty,0);
    const taxPrice = itemsPrice * 0.12;
    const shippingPrice = itemsPrice >99 ? 0 :15;
    const totalPrice = itemsPrice + taxPrice + shippingPrice
    return (
       <aside className='block col-1'>
           <h2>Order Summary</h2>
           {cartItems.length ===0 && <div>Cart Is Empty</div>}
               {/* {cartItems.map((item) =>(
              <div key={ item.id } className='row'>
             <div className='col-2'>{item.name}</div>
            <div className='col-2'>
            <button onClick={()=>onRemove(item)} className='remove'>-</button>
            <button onClick={()=>onAdd(item)} className='add'>+</button>
            </div>
             <div className='col-2 text-right'>
                 {item.qty}x ${item.price.toFixed(2)}
                 </div>          
            </div>
               ))} */}
         {cartItems.length !== 0 && (
            <>
             <hr></hr>
             <div className='row'>
                 <div className='col-2'>Items Price</div>
                 <div className='col-1 text-right'> ${itemsPrice.toFixed(2)} </div>
             </div>
             <div className='row'>
                 <div className='col-2'>Tax Price</div>
                 <div className='col-1 text-right'> ${taxPrice.toFixed(2)} </div>
             </div>
             <div className='row'>
                 <div className='col-2'>Shipping Price</div>
                 <div className='col-1 text-right'> ${shippingPrice.toFixed(2)} </div>
             </div>
             <div className='row'>
                 <div className='col-2'><strong>Total Price</strong></div>
                 <div className='col-1 text-right'><strong>${totalPrice.toFixed(2)}</strong>
                 </div>
             </div>
           
             <hr />
             <div className='row'>
                 <button onClick={() => alert('Checkout')}>
                     Checkout
                 </button>
             </div>
             
             </>
         )}
         
       </aside>
    )
}

export default Summary
