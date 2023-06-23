import Candidates from "./components/candidates";
import TotalVotes from "./components/TotalVotes";
import Filter from "./components/Filter";
import FilteredVotes from "./components/FilteredVotes";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Candidates />
      </header>
      <div className="content">
        <aside>
          <Filter />
        </aside>
        <main>
          <TotalVotes />
          <FilteredVotes />
        </main>
      </div>
    </>
  );
}

export default App;
