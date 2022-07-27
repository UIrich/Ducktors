import '../App.css';
import Error from '../components/Error.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Error404() {
    return (
    <div class="Error">
    <ChakraProvider>
        <Error/>
    </ChakraProvider>
    </div>

    );
}

export default Error404;