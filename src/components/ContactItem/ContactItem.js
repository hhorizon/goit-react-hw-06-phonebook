import propTypes from "prop-types";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { StyledItem, StyledText, StyledButton } from "./ContactItem.style";

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  return (
    <StyledItem>
      <StyledText>
        {name}: {number}
      </StyledText>
      <StyledButton
        type="button"
        onClick={() => dispatch(actions.deleteContact(id))}
      >
        Delete
      </StyledButton>
    </StyledItem>
  );
}

ContactItem.propTypes = {
  contact: propTypes.object,
};
