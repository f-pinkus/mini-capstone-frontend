import { useOutletContext, Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function CartPage() {
  const { cartItems, onRemoveFromCart } = useOutletContext();
  const navigate = useNavigate();

  const handleCreateOrder = () => {
    console.log("handleCreateOrder");
    axios.post("http://localhost:3000/orders.json").then((response) => {
      console.log("Order Created:", response.data);
      navigate("/orders");
    })
    .catch((error) => {
      console.error("Error creating order:", error);
    });
  };

  return (
    <main className="container mt-4">
      <h1 className="mb-4">Your Shopping Cart</h1>

      <p>You have <strong>{cartItems.length}</strong> {cartItems.length === 1 ? "item" : "items"} in your cart</p>

      {cartItems.length === 0 && (
        <p>Your cart is empty.</p>
      )}

      <div className="list-group mb-4">
        {cartItems.map((cartItem) => (
          <div
            key={cartItem.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5 className="mb-1">{cartItem.product.name}</h5>
              <p className="mb-1">Price: ${cartItem.product.price}</p>
              <p className="mb-1">Quantity: {cartItem.quantity}</p>
            </div>
            <button
              onClick={() => onRemoveFromCart(cartItem)}
              className="btn btn-outline-danger btn-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <button
          onClick={handleCreateOrder}
          className="btn btn-primary mb-3"
        >
          Place Order
        </button>
      )}

      <p>
        <Link to="/" className="btn btn-primary mb-3">Back to Products</Link>
      </p>
    </main>
  );
}
