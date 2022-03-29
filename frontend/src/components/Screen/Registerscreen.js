import { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './Registerscreen.css';


const Registerscreen = () => {
     const [firstname, setFirstname] = useState("");
     const [lastname, setLastname] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmpass, setConfirmpass] = useState("");
     const [success, setSuccess] = useState("");
     const [err, setErr] = useState("");

     const history = useHistory();

     const registerHandler = async (e) => {
          e.preventDefault();

          const config = {
               headers:{
                    "Content-type": "application/json",
               },
          };

          try{
               const {data} = await axios.post("/auth/register", {firstname, lastname, email, password, confirmpass}, config);

               setTimeout(() => {
                    setSuccess("");
                    history.push("/login");
               }, 3000);
               return setSuccess(data.message);
          }
          catch(error){
               setTimeout(() => {
                    setErr("");
                    setEmail("");
                    setPassword("");
                    setConfirmpass("");
               }, 3000);
               return setErr(error.response.data.error);
          }
     };

     return(
          <div className="register-screen">
            <form onSubmit={registerHandler} className="register-screen-form">
             <h3 className="register-screen-title"> Register</h3>
             { err && <span className="error-message">{err}</span> }
             { success && <span className="success-message">{success}</span> }
              <div className="form-group">
               <label htmlFor="firstname">First Name:</label>
                 <input type="text" name="firstname"  id="firstname" placeholder="Enter First Name"
                 value={firstname} onChange={(e) => setFirstname(e.target.value)} />
              </div>
              <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
                 <input type="text" name="lastname" id="lastname" placeholder="Enter Last Name"
                 value={lastname} onChange={(e) => setLastname(e.target.value)} />
              </div>
              <div className="form-group">
              <label htmlFor="email">Email:</label>
                 <input type="email" name="email" id="email" placeholder="Enter Your Email Address"
                 value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
              <label htmlFor="password">Password:</label>
                 <input type="password" name="password" id="password" placeholder="Enter a password"
                 value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
              <label htmlFor="confirmpass">Confirm Password:</label>
                 <input type="password" name="confirmpass" id="confirmpass" placeholder="Confirm Password"
                 value={confirmpass} onChange={(e) => setConfirmpass(e.target.value)} />
              </div>

              <div className="form-btn">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
              <span className="register-screen-subtext">Already have a account? <Link to="/login" className="login-link">Login</Link></span>
            </form>
          </div>
     );
}

export default Registerscreen;
