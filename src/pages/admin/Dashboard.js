import Sidebar from '../../components/Navbar/Sidebar.tsx';
import StatPanel from '../../components/Dashboard/StatPanel.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Dashboard() {
    return (
    <div className="Dashboard">
    <ChakraProvider>
        <Sidebar/>
        <StatPanel/>
    </ChakraProvider>
    </div>

    );
}

export default Dashboard;