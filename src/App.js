import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Webroutes from './Webroutes.js';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Webroutes />
      </ChakraProvider>
    </div>
    
  );
}

export default App;