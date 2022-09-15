import Sidebar from '../../components/Navbar/Sidebar.tsx';
import GroupPanel from '../../components/Dashboard/GroupPanel.tsx';
import { ChakraProvider } from '@chakra-ui/react';

function Dashboard() {
    return (
    <div class="Dashboard">
    <ChakraProvider>
        <Sidebar/>
        <GroupPanel/>
    </ChakraProvider>
    </div>

    );
}

export default Dashboard;