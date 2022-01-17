import propTypes from "prop-types";
import { StyledLabel, StyledInput } from "./Filter.style";

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <StyledLabel>
      Find contacts by name
      <StyledInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </StyledLabel>
  );
};

Filter.propTypes = {
  filter: propTypes.string,
  onChangeFilter: propTypes.func,
};

export default Filter;
