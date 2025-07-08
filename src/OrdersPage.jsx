import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function OrdersPage() {
  const [orders, setOrders] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex:)");

    axios.get("/orders.json").then((response) => {
      console.log("Orders:", response.data);
      setOrders(response.data);
    }).catch((error) => {
      console.error("Error fetching orders:", error);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main className="container my-4">
      <h1 className="mb-4">Your Orders</h1>

      <p>You have <strong>{orders.length}</strong> past {orders.length === 1 ? "order" : "orders"}.</p>

      {orders.map((order) => (
        <div key={order.id} className="mb-5 p-3 border rounded shadow-sm">
          <h3>Order #{order.id}</h3>
          <p><strong>Subtotal:</strong> ${order.subtotal}</p>
          <p><strong>Tax:</strong> ${order.tax}</p>
          <p><strong>Total:</strong> ${order.total}</p>

          <h4 className="mt-3">Products Ordered:</h4>
          {order.carted_products.map((product) => (
            <div key={product.id} className="border rounded p-2 mb-2">
              <p className="mb-1"><strong>{product.product.name}</strong></p>
              <p className="mb-1">Price: ${product.product.price}</p>
              <p className="mb-0">Quantity: {product.quantity}</p>
            </div>
          ))}
        </div>
      ))}

      <p><Link to="/" className="btn btn-link">Back to Products</Link></p>
    </main>
  );
}
