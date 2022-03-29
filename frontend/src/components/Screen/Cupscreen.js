import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './screen.css';
import Cupproducts from '../Products/Cupproducts';
import { addCups } from '../redux/actions/cupAction';


const Cupscreen = ({history}) => {

  const dispatch = useDispatch();

  const getCups = useSelector(state => state.getCups);
  const { cups, loading, error } = getCups;

  useEffect(() => {
     dispatch(addCups());
  }, [dispatch]);

     return(
          <div className="screen">
              <h2 className="screen-title">Latest Cups Product</h2>
               <div className="screen-products">
                { loading ? <i className="fa fa-spinner fa-spin"></i> :
                     error ? <h2>{error}</h2> :
                       cups.map((cup) => (
                   <Cupproducts  key={cup._id} cupId={cup._id} image={cup.image} name={cup.name} price={cup.price}/>
                 ))}
               </div>
          </div>
     );

}

export default Cupscreen;
