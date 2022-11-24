import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';
import {Box,Code,Image} from "@chakra-ui/react";
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
function App() {
  return (
    <Box>
      <Banner/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Box>
  );
}

export default App;
