import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPass from './pages/ForgotPass';
import ResetPass from './pages/ResetPass.js';
import SuccessResult from "./pages/SuccessResult";
import NotFoundResult from "./pages/NotFoundResult";
import ErrorResult from "./pages/ErrorResult";

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/signup' element={<Signup/>} />
            <Route exact path='/forgotpassword' element={<ForgotPass/>} />
            <Route exact path='/resetpassword' element={<ResetPass/>} />
            <Route exact path='/success' element={<SuccessResult/>} />
            <Route exact path='/error' element={<ErrorResult/>} />
            <Route exact path='/404' element={<NotFoundResult/>} />
            </Routes>
        </BrowserRouter>
    )
}