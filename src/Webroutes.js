import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Registrar from './pages/Registrar.js';
import Forgot from './pages/Forgot.js'
import Error from './pages/Error.js'
import Reset from './pages/Reset.js'
import Empty from './pages/Nowhere.js';
import Success from './pages/Success.js';

const Webroutes = () => {
    return(
        <Router>
            <Routes>
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/registrar' element={<Registrar/>} />
            <Route exact path='/error' element={<Error/>} />
            <Route exact path='/empty' element={<Empty/>} />
            <Route exact path='/reset' element={<Reset/>} />
            <Route exact path='/success' element={<Success/>} />
            <Route exact path='/forgot' element={<Forgot/>} />
            </Routes>
        </Router>
    )
}

export default Webroutes;