import DashboardCard from '../../components/Dashboard/Dashboard.tsx';
import { ChakraProvider } from '@chakra-ui/react';


function Dashboard() {
    return (
    <div class="Dashboard">
    <ChakraProvider>
        <DashboardCard/>
    </ChakraProvider>
    </div>

    );
}

export default Dashboard;