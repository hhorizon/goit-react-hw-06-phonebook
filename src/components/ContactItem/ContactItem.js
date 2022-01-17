import propTypes from "prop-types";
import { StyledItem, StyledText, StyledButton } from "./ContactItem.style";

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <StyledItem>
      <StyledText>
        {name}: {number}
      </StyledText>
      <StyledButton type="button" onClick={() => onDelete(id)}>
        Delete
      </StyledButton>
    </StyledItem>
  );
};

ContactItem.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  number: propTypes.string,
  onDelete: propTypes.func,
};

export default ContactItem;
