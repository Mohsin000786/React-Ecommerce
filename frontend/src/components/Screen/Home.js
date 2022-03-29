import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './screen.css';
import Cupproducts from '../Products/Cupproducts';
import { addCups } from '../redux/actions/cupAction';
import Plateproducts from '../Products/Plateproducts';
import { addPlates } from '../redux/actions/plateAction';
import Potproducts from '../Products/Potproducts';
import { addPots } from '../redux/actions/potAction';


const Home = ({history}) => {

  const dispatch = useDispatch();

  const getCups = useSelector(state => state.getCups);
  const { cups, loading, error } = getCups;

  useEffect(() => {
     dispatch(addCups());
  }, [dispatch]);

  const getPlates = useSelector(state => state.getPlates);
  const { plates} = getPlates;

  useEffect(() => {
     dispatch(addPlates());
  }, [dispatch]);

  const getPots = useSelector(state => state.getPots);
  const { pots } = getPots;

  useEffect(() => {
     dispatch(addPots());
  }, [dispatch]);

     return(
          <>
          <div className="home-temp">
               <img src="/images/temp.png" alt="images" className="responsive"/>
          </div>
           <div className="screen">
              <h2 className="screen-title">Latest Cups Product</h2>
               <div className="screen-products">
                { loading ? <i className="fa fa-spinner fa-spin"></i> :
                     error ? <h2>{error}</h2> :
                       cups.slice(6,10).map((cup) => (
                   <Cupproducts  key={cup._id} cupId={cup._id} image={cup.image} name={cup.name} price={cup.price}/>
                 ))}
               </div>
               <h2 className="screen-title">Latest Plates Product</h2>
               <div className="screen-products">
                 { loading ? <i className="fa fa-spinner fa-spin"></i> :
                     error ? <h2>{error}</h2> :
                       plates.slice(5,9).map((plate) => (
                   <Plateproducts  key={plate._id} plateId={plate._id} image={plate.image} name={plate.name} price={plate.price}/>
                 ))}
               </div>
               <h2 className="screen-title">Latest Pots Product</h2>
               <div className="screen-products">
                 { loading ? <i className="fa fa-spinner fa-spin"></i> :
                     error ? <h2>{error}</h2> :
                       pots.slice(4,8).map((pot) => (
                   <Potproducts  key={pot._id} potId={pot._id} image={pot.image} name={pot.name} price={pot.price}/>
                 ))}
               </div>
           </div>
          </>
     );
}

export default Home;
