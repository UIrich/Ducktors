import Error from '../components/Info/Error.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function ErrorResult() {
    return (
    <div class="Error">
    <ChakraProvider>
        <Error/>
    </ChakraProvider>
    </div>

    );
}

export default ErrorResult;