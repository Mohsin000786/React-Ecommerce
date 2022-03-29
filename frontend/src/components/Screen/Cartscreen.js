import { useDispatch, useSelector} from 'react-redux';
import {Link}  from 'react-router-dom';
import './Cartscreen.css';
import CartItem from '../Products/CartItems.js';
import { removeFromCart,changeCartQty } from '../redux/actions/cartAction';


const Cartscreen = ({history}) => {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyHandler = (id,value) => {
    dispatch(changeCartQty(id,value));
  }

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty)+ qty,0);
  };

  const getSubTotal = () => {
    return cartItems.reduce((price, item) => (item.price * item.qty)+ price,0);
  };

     return(
          <div className="cartscreen">
            <div className="cartscreen-left">
              <h2>Shopping Cart</h2>
               {cartItems.length === 0 ? (
                  <div className="cartscreen-box-title">
                    <h4>Your cart is Empty</h4>
                    <Link to="/">
                     Go back to Products
                    </Link>
                  </div>
                  ) : cartItems.map((item) => <CartItem key={item.product} item={item}
                                   qtyHandler={qtyHandler} removeHandler={removeHandler} />)
                }
            </div>
            <div className="cartscreen-right">
              <div className="cartscreen-info">
               <p>Subtotal({getCartCount()}) items</p>
               <p>Price: Rs {getSubTotal().toFixed(2)}</p>
              </div>
              <div>
               <button>Proceed To Checkout</button>
              </div>
            </div>
          </div>
     );
}

export default Cartscreen;
