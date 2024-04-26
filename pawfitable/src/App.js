import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main';
import Content from './content';
import LogIn from './login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/content' element={<Content/>}/>
        <Route path='/login' element={<LogIn/>}/>
      </Routes>
    </Router>
  );
}

export default App;
