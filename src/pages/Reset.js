import '../App.css';
import Unlearnt from '../components/Unlearnt.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Resetar() {
    return (
    <div class="Resetar">
    <ChakraProvider>
        <Unlearnt/>
    </ChakraProvider>
    </div>

    );
}

export default Resetar;