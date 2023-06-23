import { useState } from "react";
import { useDispatch } from "../votes/index";

import { NUMERIC_PERCENTAGE } from "../votes/actionTypes";

function Filter() {
  const [isPercentageChecked, setIsPercentageChecked] = useState(false);
  const [isNumericChecked, setIsNumericChecked] = useState(false);
  const dispatch = useDispatch();

  function handleChangePercentage() {
    if (!isPercentageChecked) {
      dispatch({ type: NUMERIC_PERCENTAGE, payload: false });
      setIsPercentageChecked(true);
      if (isNumericChecked) {
        setIsNumericChecked(!isNumericChecked);
      }
    }
  }

  function handleChangeNumeric() {
    if (!isNumericChecked) {
      dispatch({ type: NUMERIC_PERCENTAGE, payload: true });
      setIsNumericChecked(true);
      if (isPercentageChecked) {
        setIsPercentageChecked(!isPercentageChecked);
      }
    }
  }

  return (
    <>
      <label htmlFor="percentage">percentage</label>
      <input
        type="checkbox"
        id="percentage"
        checked={isPercentageChecked}
        onChange={handleChangePercentage}
      />

      <label htmlFor="numeric">numeric</label>
      <input
        type="checkbox"
        id="numeric"
        checked={isNumericChecked}
        onChange={handleChangeNumeric}
      />
    </>
  );
}

export default Filter;
