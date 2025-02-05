import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/homePage/home.js'
import Searchbar from './components/searchbar/search.js';

function App() {
  return (
  <Router>
    <Routes>
       {/* Home page */}
       <Route path="/" element={
            <div className="App">
              <Home/>
              <Searchbar/>
            </div>
          } />
    </Routes>
  </Router>
  );
}

export default App;
// added pnpm packages
