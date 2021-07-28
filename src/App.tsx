import './App.css';
import Header from './features/repo_search/Header';
import Search from './features/repo_search/Search';

function App() {
  return (
    <div className="App">
      <Header text="Github Repo fetch" />
      <Search />
    </div>
  );
}

export default App;
