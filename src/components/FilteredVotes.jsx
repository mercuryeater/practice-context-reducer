import { useSelector } from "../votes/index";

function FilteredVotes() {
  const state = useSelector();

  return (
    <div>
      {state.candidates.map((candidate) => (
        <div key={candidate.id}>
          <h2>{candidate.name}</h2>
          {state.showResultType != "percentage" ? (
            <h3>Votes: {candidate.votes}</h3>
          ) : (
            <h3>Percentage: {candidate.percentage.toFixed(2)}%</h3>
          )}
        </div>
      ))}
    </div>
  );
}

export default FilteredVotes;
