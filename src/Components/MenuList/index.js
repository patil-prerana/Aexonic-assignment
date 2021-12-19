import React, { useState, useEffect } from 'react';
import Cart from '../Cart';
import './MenuItem.css';

const Index = ({
    searchedItem,
    cartList = [],
    removeItem,
    addItem
}) => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetch(`https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7`)
        .then(res => res.json())
        .then(res => {
            setData(res);
            setFilteredData(res);
        })
    },[])


    useEffect(()=>{
        if(searchedItem.length > 0 ){
            const tempList = data.filter(item => {
                return item.item_name.toLowerCase().includes(searchedItem.toLowerCase())
            });
            setFilteredData(tempList);
        } else {
            setFilteredData(data);
        }
    }, [searchedItem, data])

    
    return (
        <div className='menu'>
            <div className='menu-list'>
                {
                    filteredData.map((item, idx) => {
                        return <div key={item.id} className='menu-item'>
                            <div className='menu-details'>
                                <div className='item-heading'>{item.item_name}</div>
                                <div className='price'>Price : {item.price}</div>
                            </div>
                            <div className='menu-price'>
                                <img src={'https://c4.wallpaperflare.com/wallpaper/757/476/907/food-burgers-burger-white-background-wallpaper-preview.jpg'} alt="menu item" />
                                <button onClick={() => addItem(item)}>Add</button> 
                            </div>
                        </div>
                    })
                }
            </div>
            <Cart 
                CartItems = {cartList}
                addItem={addItem}
                removeItem={removeItem}
            />
            
        </div>
    );
}

export default Index;
