import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";
import * as actions from "../../redux/actions";
import { StyledLabel, StyledInput } from "./Filter.style";

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <StyledLabel>
      Find contacts by name
      <StyledInput
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(actions.changeFilter(e.target.value))}
      />
    </StyledLabel>
  );
}
