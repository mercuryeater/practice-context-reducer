import { useSelector } from "../votes/index";

function FilteredVotes() {
  const state = useSelector();

  return (
    <div className="FilteredVotes">
      {state.candidates.map((candidate) => (
        <div key={candidate.id}>
          <h2>{candidate.name}: </h2>
          {state.showResultType === "percentage" ? (
            <h3>Percentage: {candidate.percentage}%</h3>
          ) : (
            <h3>Votes: {candidate.votes}</h3>
          )}
        </div>
      ))}
    </div>
  );
}

export default FilteredVotes;
