import React from 'react';

function Total({ inventory }) {

    function calculateSubtotal() {
        let subtotal = 0;
        for (let item of inventory) {
            subtotal += item.price * item.quantityOrdered;
        }
        return subtotal;
    }

    function calculateGST() {
        return calculateSubtotal() * 0.18;
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