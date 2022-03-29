import { useState} from 'react';
import {useSelector} from 'react-redux';
import './Sidedrop.css';
import { Link } from 'react-router-dom';
import  { items }   from '../shared/Dropdata.js';

const Sidedrop = ({show ,click,history}) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty)+ qty,0);
  };

 const [drop , setDrop] = useState(false);
 const toggle = () => setDrop(!drop);

 const sideDropClass = ["sidedrop"];

 if(show){
     sideDropClass.push("show");
 }

     return(
            <div className={sideDropClass.join(" ")}>
             <div className="sidedrop-title">
               <Link  to="/" onClick={click}>
                     EasySpot
               </Link>
             </div>
             <ul className="sidedrop-links">
                  <li>
                   <Link to="/" onClick={click}>
                    <i className="fas fa-home"></i>
                      Home
                   </Link>
                  </li>
                  <li>
                    <button className="drop-btn" onClick={toggle}>Products<i className="fas fa-caret-down"></i></button>
                      {
                          drop && <div className="drop-content">
                           <ul>
                             <li>
                               {items.map((item , index) => (
                                <Link to={item.path} key={index} onClick={() => {toggle(); click();}}>
                                 {item.name}
                                </Link>
                               ))}
                             </li>
                           </ul>
                         </div>
                       }
                  </li>
                  <li>
                   <Link  to="/cart" onClick={click}>
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                      Cart
                     <span className="cartlogo-badge">{getCartCount()}</span>
                    </span>
                   </Link>
                  </li>
                  <li>
                   <Link  to="/account" onClick={click}>
                    <i className="fas fa-sign-in"></i>
                      Account
                   </Link>
                  </li>
             </ul>
            </div>
     );
};

export default Sidedrop;
