import { useState, useEffect } from 'react';

function useInventory() {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                for (let item of data) {
                    item.quantityOrdered = 0;
                }
                setInventory(data)});
    }, []);

    function changeQuantity(id, operation) {
        setInventory((prevInventory) => {
            return prevInventory.map((item) => {
                if (item.id === id) {
                    if (operation === 'decrement') {
                        return { ...item, quantityOrdered: item.quantityOrdered - 1 };
                    } else {
                        return { ...item, quantityOrdered: item.quantityOrdered + 1 };
                    }
                }
                return item;
            });
        });
    }

    return {inventory, changeQuantity};
}

export default useInventory;