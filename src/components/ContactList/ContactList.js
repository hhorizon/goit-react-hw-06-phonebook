import { useSelector } from "react-redux";
import ContactItem from "../ContactItem";
import { getFilteredItems } from "../../redux/selectors";
import { StyledList } from "./ContactList.style";

export default function ContactList() {
  const filteredList = useSelector(getFilteredItems);

  return (
    <StyledList>
      {filteredList.map((el) => {
        return <ContactItem key={el.id} contact={el} />;
      })}
    </StyledList>
  );
}
