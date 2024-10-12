import { useState, useEffect } from 'react';

function useInventory() {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setInventory(data));
    }, []);

    return inventory;
}

export default useInventory;