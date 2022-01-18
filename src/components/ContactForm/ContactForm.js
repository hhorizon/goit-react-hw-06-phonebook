import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import * as actions from "../../redux/actions";
import { getItems } from "../../redux/selectors";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from "./ContactForm.style";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = { id: nanoid(5), name, number };

    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(actions.addContact(newContact));

    setName("");
    setNumber("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeInput}
        />
      </StyledLabel>

      <StyledLabel>
        Number
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeInput}
        />
      </StyledLabel>

      <StyledButton type="submit">Add contacts</StyledButton>
    </StyledForm>
  );
}
