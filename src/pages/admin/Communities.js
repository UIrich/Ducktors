import Sidebar from '../../components/Navbar/Sidebar.tsx';
import CommunityPanel from '../../components/Dashboard/CommunityPanel.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Dashboard() {
    return (
    <div class="Dashboard">
    <ChakraProvider>
        <Sidebar/>
    </ChakraProvider>
    </div>

    );
}

export default Dashboard;