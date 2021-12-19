import React from 'react';
import './Cart.css';

const Index = ({
    CartItems,
    addItem,
    removeItem,
    isFinalCart=false
}) => {

    const getTotalPrice = () => {
        let sum = 0;
        CartItems.forEach(item => {
            sum = sum + (item.unit * item.price);
        })
        return sum;
    }

    const getDiscountValue = () => {
        const totalPrice = getTotalPrice ();
        let discount = 0;
        if(totalPrice > 100 && totalPrice <= 500) {
            discount = totalPrice * 0.1;
        } else if(totalPrice > 500 ) {
            discount = totalPrice * 0.2;
        }
        return discount;
    }

    return (
        <>
            {
                CartItems.length > 0 ?
                <div className={`menu-cart ${isFinalCart && 'final-cart'}`}>
                    <div className='final-cart-list'>
                        {   
                            CartItems.map((item, idx) => {
                                return <div key={idx} className='cart-item'>
                                    <div className='item-heading'>{item.item_name}</div>
                                    <div className='price'>Price : {item.price}</div>  
                                    <div className='price'>Unit : {item.unit}</div> 
                                    <div className='menu-price'>
                                        <button onClick={() => addItem(item)}>Add</button> 
                                        <button onClick={() => removeItem(item)}>Remove</button> 
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    {
                        isFinalCart ? (
                            <div className='cart-summary'>
                                <div className='summary'>Summary</div>
                                <div className='sub-total'>Sub Total : <span>Rs. {getTotalPrice()} /-</span></div>
                                <div className='estimated-tax'>Estimated Tax : <span>NA</span> </div>
                                <div className='shipping-charges'>Shipping Charges : <span>Free</span></div>
                                <div className='Discount '>Discount : <span>Rs. {parseInt(getDiscountValue())} /-</span></div>
                                <div className='total-price'>
                                Total Price : <span> <b>Rs. {parseInt(getTotalPrice() - parseInt(getDiscountValue()))} /-</b> </span>
                            </div>
                            </div>
                        ) : 
                        <div className='total-price'>
                            Total Price : <b>Rs. {getTotalPrice()} /-</b>
                        </div>

                    }
                </div>
                : 
                isFinalCart && <div>
                    No Item in Cart. Please add from Home Page
                </div>
            }
        </>
    );
}

export default Index;
