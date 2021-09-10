import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
          <main className="main">
            <Switch>
              <Route path='/search' component={Search} />
            </Switch>
          </main>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;