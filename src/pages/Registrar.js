import '../App.css';
import Signup from '../components/Signup.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Registrar() {
    return (
    <div class="Register">
    <ChakraProvider>
        <Signup/>
    </ChakraProvider>
    </div>

    );
}

export default Registrar;