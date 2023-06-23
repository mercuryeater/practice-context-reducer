import { useDispatch } from "../votes/index";

import { NUMERIC_PERCENTAGE } from "../votes/actionTypes";

function Filter() {
  const dispatch = useDispatch();

  function handleChangePercentage() {
    dispatch({ type: NUMERIC_PERCENTAGE, payload: false });
  }

  function handleChangeNumeric() {
    dispatch({ type: NUMERIC_PERCENTAGE, payload: true });
  }

  return (
    <>
      <label htmlFor="percentage">percentage</label>
      <input
        type="radio"
        id="percentage"
        name="filterVotes"
        onChange={handleChangePercentage}
      />

      <label htmlFor="numeric">numeric</label>
      <input
        type="radio"
        id="numeric"
        defaultChecked
        name="filterVotes"
        onChange={handleChangeNumeric}
      />
    </>
  );
}

export default Filter;
