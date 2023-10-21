import './App.css';
import Interstellar from './Interstellar';

function App() {

  const filmInfo = {
    title: "Интерстеллар",
    director: "Кристофер Нолан",
    releaseYear: 2014,
    studio: "Paramount Pictures",
    posterURL: "https://upload.wikimedia.org/wikipedia/ru/c/c3/Interstellar_2014.jpg",
  };

  return (
    <div className="App">
      <Interstellar
        title={filmInfo.title}
        director={filmInfo.director}
        releaseYear={filmInfo.releaseYear}
        studio={filmInfo.studio}
        posterURL={filmInfo.posterURL}
      />   
    </div>
  );
}

export default App;
