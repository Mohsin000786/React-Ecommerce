import './CartItem.css';

const CartItem = (props) => {
     const {item, qtyHandler, removeHandler} = props;

     return(
          <div className="cartitem">
           <div className="cartitem-img">
            <img src={item.image} alt={item.name} className="responsive"/>
           </div>
            <p className="cartitem-name">{item.name}</p>

           <p className="cartitem-price">Rs {item.price}</p>
           <select className="cartitem-select" value={item.qty} onChange={(e) => qtyHandler(item.product, e.target.value)}>
            {[...Array(item.counterInStock).keys()].map((x) => (
               <option key={x+1} value={x+1}>{x+1}</option>
            ))}
           </select>

           <button className="cartitem-deleteBtn" onClick={() => removeHandler(item.product)}>
            <i className="fas fa-trash"></i>
           </button>
          </div>
     );
}

export default CartItem;
