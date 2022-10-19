import Error from '../components/Info/Error.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function ErrorResult() {
    return (
    <div className="Error">
    <ChakraProvider>
        <Error/>
    </ChakraProvider>
    </div>

    );
}

export default ErrorResult;