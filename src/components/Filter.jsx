import { useDispatch } from "../votes/index";

import { NUMERIC_PERCENTAGE } from "../votes/actionTypes";

function Filter() {
  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor="percentage">percentage</label>
      <input
        type="radio"
        id="percentage"
        name="filterVotes"
        onChange={() =>
          dispatch({ type: NUMERIC_PERCENTAGE, payload: "percentage" })
        }
      />

      <label htmlFor="numeric">numeric</label>
      <input
        type="radio"
        id="numeric"
        defaultChecked
        name="filterVotes"
        onChange={() =>
          dispatch({ type: NUMERIC_PERCENTAGE, payload: "numeric" })
        }
      />
    </>
  );
}

export default Filter;
