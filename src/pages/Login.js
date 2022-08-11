import LoginCard from '../components/Login/Login.tsx';
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