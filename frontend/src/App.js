import Main from './components/Main'
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';

const App = () => {
     return(
               <Router>
                    <div className="App">
                       <Main />
                    </div>
               </Router>
          );

};

export default App;
