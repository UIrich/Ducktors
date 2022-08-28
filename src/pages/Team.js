
import Navbar from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.tsx';
import TeamContainer from '../components/Footer/Team.tsx';
import Carousel from '../components/Carousel/Carousel.tsx';
import { ChakraProvider } from "@chakra-ui/react";

function Team() {
    return (
        <ChakraProvider>
        <Navbar/>
        <Carousel/>
        <TeamContainer/>
        <Footer/>
        </ChakraProvider>

    );
}

export default Team;