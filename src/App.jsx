import Candidates from "./components/candidates";
import TotalVotes from "./components/TotalVotes";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  return (
    <>
      <Candidates />
      <Filter />
      <TotalVotes />
    </>
  );
}

export default App;
