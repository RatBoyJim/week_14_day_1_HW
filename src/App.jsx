import './App.css';
import ReleaseBox from './containers/ReleaseBox'


function App() {
  return (
    <>
    <div className="movie-list-container">
      <div className="movie-list">
        <ReleaseBox></ReleaseBox>
          <form action="https://www.imdb.com/calendar/?region=gb">
            <input type="submit" value="View more upcoming releases"></input>
          </form>
      </div>
    </div>
    </>
  );
}

export default App;
