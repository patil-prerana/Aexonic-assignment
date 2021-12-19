import React from 'react';
import './Header.css';

const Index = ({
    searchedItem,
    onCartToggle,
    isCartView
}) => {

    const onInputChange = e => {
        searchedItem(e.target.value)
    };
    return (
        <div className='header-wrapper'>
            <div className='heading'>McDonald's</div>
            <div>
                { !isCartView  && <input type='text' placeholder='Search item' onChange={onInputChange} /> }
            </div>
            <div className='cart-btn'>
                <button onClick={onCartToggle}> {!isCartView ? 'Cart' : 'Home Page'} </button>
            </div>
        </div>
    );
}

export default Index;
