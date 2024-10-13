import React from 'react';

function Total({ inventory }) {

    function calculateSubtotal() {
        let subtotal = 0;
        for (let item of inventory) {
            subtotal += item.price * item.quantityOrdered;
        }
        return Math.round(subtotal * 100) / 100;
    }

    function calculateGST() {
        return Math.round(calculateSubtotal() * 0.18 * 100) / 100;
    }

    function calculateTotal() {
        return calculateSubtotal() + calculateGST();
    }
    
    return (
        <div className="total-container">
            <h3> Order Summary </h3>
            <p> Subtotal: Rs.{calculateSubtotal()} </p>
            <p> GST: Rs.{calculateGST()} </p>
            <p> Delivery: Rs. 0 </p>
            <hr />
            <p> Total: Rs.{calculateTotal()} </p>
        </div>
    )
}

export default Total;