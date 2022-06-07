
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import SingleuserInfo from './Components/Home/SingleUserInfo.js/SingleuserInfo';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SingleuserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
