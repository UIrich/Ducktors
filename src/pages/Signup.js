import '../App.css';
import SignupCard from '../components/Login/Signup.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Signup() {
    return (
    <div class="Register">
    <ChakraProvider>
        <SignupCard/>
    </ChakraProvider>
    </div>

    );
}

export default Signup;