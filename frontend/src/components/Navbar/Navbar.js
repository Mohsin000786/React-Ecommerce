import { useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({click}) => {

     const cart = useSelector((state) => state.cart);
     const { cartItems } = cart;

     const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty)+ qty,0);
     };

          return(
               <nav className="navbar">
                  <div className="navbar-logo">
                   <Link to="/">
                     EasySpot
                   </Link>
                  </div>

               <ul className= "navbar-links">
                  <li>
                   <Link to="/">
                    <i className="fas fa-home"></i>
                      Home
                   </Link>
                  </li>

                  <li>
                   <div className="drop-down">
                     <button className="drop-button">Products<i className="fas fa-caret-down"></i></button>
                     <div className="drop-area">
                       <ul>
                         <li>
                          <Link to='/cups'> Cups & Mugs</Link>
                         </li>
                         <li>
                          <Link to='/plates'> Plates & platters</Link>
                         </li>
                         <li>
                          <Link to='/pots'> Pots & Planters</Link>
                         </li>
                       </ul>
                     </div>
                   </div>
                  </li>

                  <li>
                   <Link to="/cart">
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                      Cart
                     <span className="cartlogo-badge">{getCartCount()}</span>
                    </span>
                   </Link>
                  </li>

                  <li>
                   <div className="drop-down">
                     <button className="drop-button"><i className="fas fa-user" ></i>Account</button>
                     <div className="drop-area">
                       <ul>
                         <li>
                          <Link to='/account'> Profile</Link>
                         </li>
                         <li>
                           <Link to='/logout'> Logout</Link>
                         </li>
                       </ul>
                     </div>
                   </div>
                  </li>
               </ul>
                  <div className="nav-icon" onClick={click}>
                   <div></div>
                   <div></div>
                   <div></div>
                  </div>
               </nav>
          );
}


export default Navbar;
