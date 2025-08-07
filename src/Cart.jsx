import formatCurrency from "./helpers/formatCurrency";

function Cart({ cart, checkout }) {
  const total = cart.reduce(
    (acc, cartItem) => acc + cartItem.pizza.sizes[cartItem.size],
    0,
  );

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span className="size">{item.size}</span> –
            <span className="type">{item.pizza.name}</span> –
            <span className="price">{item.price}</span>
          </li>
        ))}
      </ul>
      <p>Total: {formatCurrency(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default Cart;
