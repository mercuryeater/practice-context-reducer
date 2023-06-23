import { useDispatch } from "../votes/index";

import { NUMERIC_PERCENTAGE } from "../votes/actionTypes";

function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <h3>RESULTS AS:</h3>
      <span>
        <label htmlFor="percentage">Percentage</label>
        <input
          type="radio"
          id="percentage"
          name="filterVotes"
          onChange={() =>
            dispatch({ type: NUMERIC_PERCENTAGE, payload: "percentage" })
          }
        />
      </span>

      <span>
        <label htmlFor="numeric">Numeric</label>
        <input
          type="radio"
          id="numeric"
          defaultChecked
          name="filterVotes"
          onChange={() =>
            dispatch({ type: NUMERIC_PERCENTAGE, payload: "numeric" })
          }
        />
      </span>
    </>
  );
}

export default Filter;
