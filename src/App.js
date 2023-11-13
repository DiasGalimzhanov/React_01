import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Info from './components/Info';
import MainAttraction from './components/MainAttraction';
import OtherAttraction from './components/OtherAttraction';
import Photo from './components/Photo';

function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/info">Информация о городе</Link></li>
              <li><Link to="/main-attraction">Главная достопримечательность</Link></li>
              <li><Link to="/art-collection">Другие достопримечательности</Link></li>
              <li><Link to="/photo">Фотографии города</Link></li>
            </ul>
          </nav>

          <hr />
          <Routes>
            <Route path="/info" element={<Info />} />
            <Route path="/main-attraction" element={<MainAttraction/>} />
            <Route path="/art-collection" element={<OtherAttraction/>} />
            <Route path="/photo" element={<Photo/>} />
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
