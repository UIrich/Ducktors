import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.tsx';
import CommunityContainer from '../components/Footer/Community.tsx';
import Carousel from '../components/Carousel/Carousel.tsx';
import { ChakraProvider } from "@chakra-ui/react";

function Community() {
    return (
        <ChakraProvider>
        <Navbar/>
        <Carousel/>
        <CommunityContainer/>
        <Footer/>
        </ChakraProvider>

    );
}

export default Community;