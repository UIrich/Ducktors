import '../App.css';
import Nowhere from '../components/Nowhere.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Empty() {
    return (
    <div class="Empty">
    <ChakraProvider>
        <Nowhere/>
    </ChakraProvider>
    </div>

    );
}

export default Empty;