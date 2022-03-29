import './products.css';
import { Link } from 'react-router-dom';

const Potproducts = (props) => {
     const { potId, name, image, price } = props;
     return(
          <div className="products">
           <img src={image}  alt={name} className="responsive" />
             <div className="products-info">
              <p className="info-title">{name}</p>
              <p className="info-price">Rs {price}</p>
              <Link to={`/pots/${potId}`} className="info-btn">View</Link>
             </div>
          </div>
     );
}


export default Potproducts;
