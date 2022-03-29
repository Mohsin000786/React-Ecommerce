import { useState } from 'react';
import PrivateRoute from './routing/PrivateRoute.js';
import Loginscreen from './Screen/Loginscreen.js';
import Logoutscreen from './Screen/Logoutscreen.js';
import Registerscreen from './Screen/Registerscreen.js';
import Forgotpasswordscreen from './Screen/Forgotpasswordscreen.js';
import Resetpasswordscreen from './Screen/Resetpasswordscreen.js';
import Navbar from './Navbar/Navbar.js';
import Backdrop from './Navbar/Backdrop.js';
import Sidedrop from './Navbar/Sidedrop.js';
import Cupscreen from './Screen/Cupscreen.js';
import Cupdetailscreen from './Screen/Cupdetailscreen.js';
import Potscreen from './Screen/Potscreen.js';
import Potdetailscreen from './Screen/Potdetailscreen.js';
import Platescreen from './Screen/Platescreen.js';
import Platedetailscreen from './Screen/Platedetailscreen.js';
import Cartscreen from './Screen/Cartscreen.js';
import Account from './Screen/Account.js';
import Home from './Screen/Home';
import About from './Screen/About';
import Contact from './Screen/Contact';
import Footer from './Screen/Footer';
import {Switch, Route} from 'react-router-dom';

const Main = () => {
const [sideToggle, setSideToggle] = useState(false);
     return (
     <div>
        <Navbar click={() => setSideToggle(true)} />
        <Sidedrop show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
         <Switch>
             <PrivateRoute exact path="/"  component={Home} />
             <Route exact path="/register" component={Registerscreen} />
             <Route exact path="/login"  component={Loginscreen} />
             <Route exact path="/logout"  component={Logoutscreen} />
             <Route exact path="/forgotpassword" component={Forgotpasswordscreen} />
             <Route exact path="/resetpassword/:resetToken" component={Resetpasswordscreen} />
             <PrivateRoute exact path="/account" component={Account} />
             <PrivateRoute exact path='/cups' component={Cupscreen} />
             <PrivateRoute path="/cups/:id" component={Cupdetailscreen} />
             <PrivateRoute exact path='/plates' component={Platescreen} />
             <PrivateRoute path="/plates/:id" component={Platedetailscreen} />
             <PrivateRoute exact path='/pots' component={Potscreen} />
             <PrivateRoute path="/pots/:id" component={Potdetailscreen} />
             <PrivateRoute path="/cart" component={Cartscreen} />
             <PrivateRoute path='/aboutus' component={About} />
             <PrivateRoute path='/contactus' component={Contact} />
         </Switch>
        <Footer />
      </div>
     );
}

export default Main;
