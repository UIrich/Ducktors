import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import Auth from './contexts/Auth'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPass from './pages/ForgotPass';
import ResetPass from './pages/ResetPass.js';
import SuccessResult from './pages/SuccessResult';
import NotFoundResult from './pages/NotFoundResult';
import ErrorResult from './pages/ErrorResult';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Terms from './pages/Terms';
import Help from './pages/Help';
import Security from './pages/Security';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Community from './pages/Community';
import Admin from './pages/admin/Admin';
import Dashboard from './pages/admin/Dashboard';
import Posts from './pages/admin/Posts';
import Users from './pages/admin/Users';

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/signup' element={<Signup/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/community' element={<Community/>} />
            <Route exact path='/help' element={<Help/>} />
            <Route exact path='/terms' element={<Terms/>} />
            <Route exact path='/cookies' element={<Cookies/>} />
            <Route exact path='/privacy' element={<Privacy/>} />
            <Route exact path='/security' element={<Security/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/team' element={<Team/>} />
            <Route exact path='/admin' element={<Admin/>} />
            <Route element={<Auth />}><Route exact path='/admin/dashboard' element={<Dashboard/>} /></Route>
            <Route element={<Auth />}><Route exact path='/admin/dashboard/users' element={<Users/>} /></Route>
            <Route element={<Auth />}><Route exact path='/admin/dashboard/posts' element={<Posts/>} /></Route>
            <Route exact path='/forgotpassword' element={<ForgotPass/>} />
            <Route exact path='/resetpassword' element={<ResetPass/>} />
            <Route exact path='/success' element={<SuccessResult/>} />
            <Route exact path='/error' element={<ErrorResult/>} />
            <Route exact path='/404' element={<NotFoundResult/>} />
            </Routes>
        </BrowserRouter>
    )
}