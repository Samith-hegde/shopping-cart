import React from 'react';
import { useState, useEffect } from 'react';
import useInventory from '../../hooks/useInventory';
import './Shop.css';

function Shop() {
    const inventory = useInventory();
    const [category, setCategory] = useState('all');

    function handleCategoryChange(newCategory) {
        setCategory(newCategory);
    }

    if (!inventory) {
        return <p>Loading...</p>;
    }

    return (
        <div className="shop-container">
            <section className="categories">
                <h2> Categories </h2>
                <button onClick={() => handleCategoryChange(`all`)}> All </button>
                <button onClick={() => handleCategoryChange(`men's clothing`)}> Men's Clothing </button>
                <button onClick={() => handleCategoryChange(`women's clothing`)}> Women's Clothing </button>
                <button onClick={() => handleCategoryChange(`electronics`)}> Electronics </button>
                <button onClick={() => handleCategoryChange(`jewelery`)}> Jewelry </button>
            </section>

            <ul className="inventory-items">
                {inventory.map((item) => {
                if (category === 'all' || item.category === category) {
                    return (
                        <li key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                            <p>{item.category}</p>
                        </li>
                    )
                }
                return null;
                })}
            </ul>
        </div>
    )
}

export default Shop;