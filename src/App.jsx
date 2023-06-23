import Candidates from "./components/candidates";
import TotalVotes from "./components/TotalVotes";
import Filter from "./components/Filter";
import FilteredVotes from "./components/FilteredVotes";
import "./App.css";

function App() {
  return (
    <>
      <Candidates />
      <Filter />
      <TotalVotes />
      <FilteredVotes />
    </>
  );
}

export default App;
