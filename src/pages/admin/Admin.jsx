import SplitScreenCard from '../../components/Login/SplitScreen.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function SplitScreen() {
    return (
    <div className="SplitScreen">
    <ChakraProvider>
        <SplitScreenCard/>
    </ChakraProvider>
    </div>

    );
}

export default SplitScreen;