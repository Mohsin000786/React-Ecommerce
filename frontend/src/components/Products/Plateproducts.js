import './products.css';
import { Link } from 'react-router-dom';

const Plateproducts = (props) => {
     const {  plateId, name, image, price } = props;
     return(
          <div className="products">
           <img src={image}  alt={name} className="responsive" />
             <div className="products-info">
              <p className="info-title">{name}</p>
              <p className="info-price">Rs {price}</p>
              <Link to={`/plates/${plateId}`} className="info-btn">View</Link>
             </div>
          </div>
     );
}


export default Plateproducts;
