import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import Favs from './views/Favs'
import Login from './views/Login';
import Daily from './views/Daily';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App p-4">
      <Routes>
        <Route path='/' element={ <Main />} />
        {/* <Route path='/main' element={ <Main />} /> */}
        <Route path='/favs' element={ <Favs />} />
        {/* <Route path='/daily' element={ <Daily />} /> */}
      </Routes>
      
    </div>
  );
}

export default App;
