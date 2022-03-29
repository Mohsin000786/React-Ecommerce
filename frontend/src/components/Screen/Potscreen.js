import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './screen.css';
import Potproducts from '../Products/Potproducts';
import { addPots } from '../redux/actions/potAction';


const Potscreen = ({history}) => {

  const dispatch = useDispatch();

  const getPots = useSelector(state => state.getPots);
  const { pots, loading, error } = getPots;

  useEffect(() => {
     dispatch(addPots());
  }, [dispatch]);

     return(
          <div className="screen">
              <h2 className="screen-title">Latest Pots Product</h2>
               <div className="screen-products">
                 { loading ? <i className="fa fa-spinner fa-spin"></i> :
                     error ? <h2>{error}</h2> :
                       pots.map((pot) => (
                   <Potproducts  key={pot._id} potId={pot._id} image={pot.image} name={pot.name} price={pot.price}/>
                 ))}
               </div>
          </div>
     );

}

export default Potscreen;
