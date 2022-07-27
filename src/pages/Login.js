import '../App.css';
import Login from '../components/Login.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function WebLogin() {
    return (
    <div class="Login">
    <ChakraProvider>
        <Login/>
    </ChakraProvider>
    </div>

    );
}

export default WebLogin;