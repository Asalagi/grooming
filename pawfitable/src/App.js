import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main';
import Content from './content';
import LogIn from './login';
import Clients from './clients';
import NavBar from './nav-bar';
import TestIt from './testit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/content' element={<Content/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/clients' element={<Clients/>}/>
        <Route path='/nav-bar' element={<NavBar/>}/>
        <Route path='testit' element={<TestIt/>}/>
      </Routes>
    </Router>
  );
}

export default App;
