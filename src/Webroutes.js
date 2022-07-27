import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
} from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Registrar.js';
import Reset from './pages/Reset.js'

const Webroutes = () => {
    return(
        <Router>
            <Routes>
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/registrar' element={<Register/>} />
            <Route exact path='/reset' element={<Reset/>} />
            </Routes>
        </Router>
    )
}

export default Webroutes;