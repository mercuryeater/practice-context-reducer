import { useSelector, useDispatch } from "../votes/index";
import { INCREMENT } from "../votes/actionTypes";

function Candidates() {
  const state = useSelector();
  const dispatch = useDispatch();

  return (
    <div>
      {state.candidates.map((candidate) => (
        <button
          key={candidate.id}
          onClick={() => dispatch({ type: INCREMENT, payload: candidate.id })}
        >
          <h2>{candidate.name}</h2>
          <h3>Votos: {candidate.votes}</h3>
        </button>
      ))}
    </div>
  );
}

export default Candidates;
