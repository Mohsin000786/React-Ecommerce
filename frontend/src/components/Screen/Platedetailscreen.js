import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './detailscreen.css';
import { addPlateDetails } from '../redux/actions/plateAction';
import { addPlateToCart } from '../redux/actions/cartAction';

const Platedetailscreen = ({match, history}) => {
 const [qty, setQty] = useState(1);
 const dispatch = useDispatch();

 const getPlateDetails = useSelector(state => state.getPlateDetails);
 const { plate, loading, error} = getPlateDetails;

 useEffect(() => {
          if(plate && match.params.id !== plate._id){
               dispatch(addPlateDetails(match.params.id));
           }
 },[dispatch, plate, match]);

 const addToCartHandler = () =>{
     dispatch(addPlateToCart(plate._id, qty));
     history.push("/cart");
 }

     return(
          <div className="screen-detail">
           { loading ? <i className="fa fa-spinner fa-spin"></i> : error ? <h2>{error}</h2> : (
               <>
                   <div className="left-detail">
                    <div className="left-image">
                     <img src={plate.image}  alt={plate.name} className="responsive"/>
                    </div>
                    <div className="left-info">
                     <p className="left-name">{plate.name}</p>
                     <p>Price: Rs {plate.price} </p>
                     <p>Description: {plate.description} </p>
                    </div>
                   </div>
                   <div className="right-detail">
                    <div className="right-info">
                      <p>
                       Price:{" "}
                       <span> Rs {plate.price}</span>
                      </p>
                      <p>
                       Status: <span>{plate.counterInStock > 0 ? <i className="Instock">In Stock</i> :
                             <i className="Outstock">Out Of Stock</i> }</span>
                      </p>
                      <p>
                       Qty
                       <select value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(plate.counterInStock).keys()].map((x) => (
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

export default Platedetailscreen;
