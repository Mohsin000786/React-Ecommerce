import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './screen.css';
import Plateproducts from '../Products/Plateproducts';
import { addPlates } from '../redux/actions/plateAction';


const Platescreen = ({history}) => {

  const dispatch = useDispatch();

  const getPlates = useSelector(state => state.getPlates);
  const { plates, loading, error } = getPlates;

  useEffect(() => {
     dispatch(addPlates());
  }, [dispatch]);

     return(
          <div className="screen">
              <h2 className="screen-title">Latest Plates Product</h2>
               <div className="screen-products">
                 { loading ? <i className="fa fa-spinner fa-spin"></i> :
                     error ? <h2>{error}</h2> :
                       plates.map((plate) => (
                   <Plateproducts  key={plate._id} plateId={plate._id} image={plate.image} name={plate.name} price={plate.price}/>
                 ))}
               </div>
          </div>
     );

}

export default Platescreen;
