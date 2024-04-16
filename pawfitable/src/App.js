import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main';
import Content from './content';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/content' element={<Content/>}/>
      </Routes>
    </Router>
  );
}

export default App;
