import '../App.css';
import Unlearnt from '../components/Unlearnt.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function ForgotPassword() {
    return (
    <div class="Forgot">
    <ChakraProvider>
        <Unlearnt/>
    </ChakraProvider>
    </div>

    );
}

export default ForgotPassword;