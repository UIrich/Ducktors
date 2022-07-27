import '../App.css';
import Success from '../components/Success.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function SuccessPage() {
    return (
    <div class="Success">
    <ChakraProvider>
        <Success/>
    </ChakraProvider>
    </div>

    );
}

export default SuccessPage;