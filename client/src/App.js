import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import Search from './pages/Search'
import Container from './components/Container'
import Navbar from './components/Navbar'

import 'bulma/css/bulma.min.css'
import './App.css';

function App() {
  
  return (
    <>
      <Container>
        <BrowserRouter>
          <Navbar />
          <Search />
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;