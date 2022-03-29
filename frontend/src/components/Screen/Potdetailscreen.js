import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './detailscreen.css';
import { addPotDetails } from '../redux/actions/potAction';
import { addPotToCart } from '../redux/actions/cartAction';

const Potdetailscreen = ({match, history}) => {

 const [qty, setQty] = useState(1);
 const dispatch = useDispatch();

 const getPotDetails = useSelector(state => state.getPotDetails);
 const { pot, loading, error} = getPotDetails;

 useEffect(() => {
          if(pot && match.params.id !== pot._id){
               dispatch(addPotDetails(match.params.id));
           }
 },[dispatch, pot, match]);

 const addToCartHandler = () =>{
     dispatch(addPotToCart(pot._id, qty));
     history.push("/cart");
 }

     return(
          <div className="screen-detail">
           { loading ? <i className="fa fa-spinner fa-spin"></i> : error ? <h2>{error}</h2> : (
               <>
                   <div className="left-detail">
                    <div className="left-image">
                     <img src={pot.image}  alt={pot.name} className="responsive"/>
                    </div>
                    <div className="left-info">
                     <p className="left-name">{pot.name}</p>
                     <p>Price: Rs {pot.price} </p>
                     <p>Description: {pot.description} </p>
                    </div>
                   </div>
                   <div className="right-detail">
                    <div className="right-info">
                      <p>
                       Price:{" "}
                       <span> Rs {pot.price}</span>
                      </p>
                      <p>
                       Status: <span>{pot.counterInStock > 0 ? <i className="Instock">In Stock</i> :
                             <i className="Outstock">Out Of Stock</i> }</span>
                      </p>
                      <p>
                       Qty
                       <select value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(pot.counterInStock).keys()].map((x) => (
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

export default Potdetailscreen;
