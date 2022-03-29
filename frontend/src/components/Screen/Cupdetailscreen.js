import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './detailscreen.css';
import { addCupDetails } from '../redux/actions/cupAction';
import { addCupToCart } from '../redux/actions/cartAction';

const Cupdetailscreen = ({match, history}) => {

 const [qty, setQty] = useState(1);
 const dispatch = useDispatch();

 const getCupDetails = useSelector(state => state.getCupDetails);
 const { cup, loading, error} = getCupDetails;

 useEffect(() => {
          if(cup && match.params.id !== cup._id){
               dispatch(addCupDetails(match.params.id));
          }
 },[dispatch, cup, match]);

 const addToCartHandler = () =>{
     dispatch(addCupToCart(cup._id, qty));
     history.push("/cart");
 }


     return(
          <div className="screen-detail">
           { loading ? <i className="fa fa-spinner fa-spin"></i> : error ? <h2>{error}</h2> : (
               <>
                   <div className="left-detail">
                    <div className="left-image">
                     <img src={cup.image}  alt={cup.name} className="responsive"/>
                    </div>
                    <div className="left-info">
                     <p className="left-name">{cup.name}</p>
                     <p>Price: Rs {cup.price} </p>
                     <p>Description: {cup.description} </p>
                    </div>
                   </div>
                   <div className="right-detail">
                    <div className="right-info">
                      <p>
                       Price:{" "}
                       <span> Rs {cup.price}</span>
                      </p>
                      <p>
                       Status: <span>{cup.counterInStock > 0 ? <i className="Instock">In Stock</i> :
                             <i className="Outstock">Out Of Stock</i> }</span>
                      </p>
                      <p>
                       Qty:
                       <select value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(cup.counterInStock).keys()].map((x) => (
                              <option key={x+1} value={x+1}>{x+1}</option>
                         ))}
                      </select>
                     </p>
                     <p>
                      <button type="button" onClick={addToCartHandler}>Add To Cart</button>
                     </p>
                    </div>
                    </div>
               </>
               )
           }
          </div>
     );
}

export default Cupdetailscreen;
