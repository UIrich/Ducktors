import Success from '../components/Info/Success.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function SuccessResult() {
    return (
    <div class="Success">
    <ChakraProvider>
        <Success/>
    </ChakraProvider>
    </div>

    );
}

export default SuccessResult;