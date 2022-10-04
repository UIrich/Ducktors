import LoginCard from '../components/Login/Login.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function Login() {
    return (
    <div class="Login">
    <ChakraProvider>
        <LoginCard/>
    </ChakraProvider>
    </div>

    );
}

export default Login;