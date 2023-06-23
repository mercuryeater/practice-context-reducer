import { useSelector, useDispatch } from "../votes/index";
import { INCREMENT } from "../votes/actionTypes";

function FilteredVotes() {
  const state = useSelector();

  return (
    <div>
      {state.candidates.map((candidate) => (
        <div key={candidate.id}>
          <h2>{candidate.name}</h2>
          <h3>Votos: {candidate.votes}</h3>
        </div>
      ))}
    </div>
  );
}

export default FilteredVotes;
