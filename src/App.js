import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';
import Detail from './Components/Detail';

function App () {
    return(
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                    <Route path="/">                        
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;