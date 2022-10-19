import Sidebar from '../../components/Navbar/Sidebar.tsx';
import HeroPanel from '../../components/Dashboard/HeroPanel.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function Dashboard() {
    return (
    <div className="Dashboard">
    <ChakraProvider>
        <Sidebar/>
        <HeroPanel/>
    </ChakraProvider>
    </div>

    );
}

export default Dashboard;