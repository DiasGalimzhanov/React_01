import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Bio from './components/Bio';
import FamousPainting from './components/FamousPainting';
import ArtCollection from './components/ArtCollection';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/bio">Биография</Link></li>
              <li><Link to="/famous-painting">Известная картина</Link></li>
              <li><Link to="/art-collection">Коллекция картин</Link></li>
            </ul>
          </nav>

          <hr />
          <Routes>
            <Route path="/bio" element={<Bio />} />
            <Route path="/famous-painting" element={<FamousPainting/>} />
            <Route path="/art-collection" element={<ArtCollection/>} />
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
