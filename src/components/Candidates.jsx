import { useSelector, useDispatch } from "../votes/index";

function Candidates() {
  const state = useSelector();
  const dispatch = useDispatch();

  const vote = (e) => {
    e.preventDefault();
    dispatch();
  };

  return (
    <>
      {state.candidates.map((candidate) => (
        <button
          key={candidate.id}
          onClick={() => dispatch({ type: "INCREMENT", payload: candidate.id })}
        >
          <h2>{candidate.name}</h2>
          <h3>Votos: {candidate.votes}</h3>
        </button>
      ))}
    </>
  );
}

export default Candidates;
