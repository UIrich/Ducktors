import Sidebar from '../../components/Navbar/Sidebar.tsx';
import StatsPanel from '../../components/Dashboard/StatsPanel.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Dashboard() {
    return (
    <div class="Dashboard">
    <ChakraProvider>
        <Sidebar/>
        <StatsPanel/>
    </ChakraProvider>
    </div>

    );
}

export default Dashboard;