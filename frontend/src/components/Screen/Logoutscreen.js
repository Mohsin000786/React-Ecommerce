import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { userLogout } from '../redux/actions/userAction';
import { useHistory } from 'react-router-dom';

const Logoutscreen = () => {

     const history = useHistory();

     const dispatch = useDispatch();

     const auth = useSelector((state) => state.auth);
     const { isAuth } = auth;

     useEffect(() => {
          dispatch(userLogout());

          if(isAuth === false){
               history.push("/login")
          }

     }, [dispatch, isAuth, history]);

     return (
               <>
                    <h1>You'r are logout successfully.</h1>
               </>
          );

};

export default Logoutscreen;
