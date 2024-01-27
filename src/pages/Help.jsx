import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.tsx';
import HelpContainer from '../components/Footer/Help.tsx';
import Carousel from '../components/Carousel/Carousel.tsx';
import { ChakraProvider } from "@chakra-ui/react";

function Help() {
    return (
        <ChakraProvider>
        <Navbar/>
        <Carousel/>
        <HelpContainer/>
        <Footer/>
        </ChakraProvider>

    );
}

export default Help;