import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/actions/userAction.js';
import { Link, useHistory } from 'react-router-dom';
import './Loginscreen.css';


const Loginscreen = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [err, setErr] = useState("");
     const [success, setSuccess] = useState("");

     const history = useHistory();
     const dispatch = useDispatch();

     const auth = useSelector((state) => state.auth);
     const { error, prompt, isAuth} = auth;

     useEffect(() => {
          if(isAuth === true) {
               setTimeout(() => {
                    history.push("/");
               }, 1000);
               return setSuccess(prompt);
          }
          else{
              setTimeout(() => {
                    setErr("");
                    setEmail("");
                    setPassword("");
               }, 3000);
               return setErr(error);
          }
     }, [isAuth, history, prompt, error]);

     const loginHandler = async (e) => {
          e.preventDefault();

          dispatch(userLogin(email, password));

     };

     return(
          <div className="login-screen">
           <div className="login-screen-form">
            <form onSubmit={loginHandler}>
             <h3 className="login-screen-title"> Login</h3>
              {err && <span className="error-message">{err}</span> }
              {success && <span className="success-message">{success}</span> }
              <div className="form-group">
              <label htmlFor="email">Email:</label>
                 <input type="email" required id="email" placeholder="Enter Your Email Address"
                 value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="form-group">
              <label htmlFor="password">Password:</label>
                 <input type="password" required id="password" placeholder="Enter a password"
                 value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

               <Link to="/forgotpassword" className="login-screen-forgotpassword">
                 Forgot Password?
               </Link>

              <div className="form-btn">
               <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <span className="login-screen-subtext">Don't have a account? <Link to="/register" className="register-link">Register</Link></span>
             </form>
            </div>
          </div>
     );
}

export default Loginscreen;
