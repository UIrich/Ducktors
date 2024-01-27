import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.tsx';
import SecurityContainer from '../components/Footer/Security.tsx';
import Carousel from '../components/Carousel/Carousel.tsx';
import { ChakraProvider } from "@chakra-ui/react";

function Security() {
    return (
        <ChakraProvider>
        <Navbar/>
        <Carousel/>
        <SecurityContainer/>
        <Footer/>
        </ChakraProvider>

    );
}

export default Security;