import React, { useState } from 'react';
import Header from '../Header';
import MenuList from '../MenuList';
import Cart from '../Cart'
import './Wrapper.css';

const Index = () => {

    const [searchStr, setSearchStr] = useState('');
    const [isCartView, setIsCartView] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItem = item => {
        const idx = cartItems.findIndex(items => items.id === item.id);
        if(idx === -1) {
            item.unit = 1;
            const tempCard = [item, ...cartItems];
            setCartItems(tempCard);
        } else {
            cartItems[idx].unit = cartItems[idx].unit + 1;
            const tempCard = [...cartItems];
            setCartItems(tempCard);
        }
    }

    const removeItem = item => {
        const idx = cartItems.findIndex(items => items.id === item.id);
        if(idx !== -1 && cartItems[idx].unit !== 1) {
            cartItems[idx].unit = cartItems[idx].unit - 1;
            const tempCard = [...cartItems];
            setCartItems(tempCard);
        } else {
            cartItems.splice(idx, 1);
            const tempCard = [...cartItems];
            setCartItems(tempCard);
        }
    }

    return (
        <div className='wrapper'>
            <Header 
                searchedItem = {(str) => setSearchStr(str)}
                onCartToggle={() => setIsCartView(!isCartView)}
                isCartView={isCartView}
            />
            {
                isCartView ? 
                <Cart 
                    CartItems = {cartItems}
                    addItem={(item) => addItem(item)}
                    removeItem={(item) => removeItem(item)}
                    isFinalCart={true}
                />
                :
                <MenuList 
                    cartList = {cartItems}
                    searchedItem={searchStr}
                    addItem={addItem}
                    removeItem={removeItem}
                />
            }
        </div>
    );
}

export default Index;
