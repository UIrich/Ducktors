import NotFound from '../components/Info/NotFound.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function NotFoundResult() {
    return (
    <div class="NotFound">
    <ChakraProvider>
        <NotFound/>
    </ChakraProvider>
    </div>

    );
}

export default NotFoundResult;