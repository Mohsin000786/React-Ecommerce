import { useSelector } from 'react-redux';
import { Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({component: Component , ...rest}) => {

const auth = useSelector((state) => state.auth);
const { isAuth } = auth;

     return(
          <Route {...rest}
               render={(props) => isAuth ? (
                         < Component {...props} />
                    ): (
                         <Redirect to="/login" />
                    )
          }
          />
     );
};

export default PrivateRoute;
