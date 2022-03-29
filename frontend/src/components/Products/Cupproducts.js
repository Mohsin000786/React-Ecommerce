import './products.css';
import { Link } from 'react-router-dom';

const Cupproducts = (props) => {
     const { cupId, name, image, price } = props;
     return(
          <div className="products">
           <img src={image}  alt={name} className="responsive" />
             <div className="products-info">
              <p className="info-title">{name}</p>
              <p className="info-price">Rs {price}</p>
              <Link to={`/cups/${cupId}`} className="info-btn">View</Link>
             </div>
          </div>
     );
}


export default Cupproducts;
