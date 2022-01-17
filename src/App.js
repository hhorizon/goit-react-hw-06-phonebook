import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Container from "./components/Container";
import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState(" ");

  const addContact = (newName, newNumber) => {
    const isDuplicate = contacts.find((contact) => contact.name === newName);

    if (isDuplicate) {
      toast(`${newName} is already in contacts.`);
    } else {
      const newContact = { id: nanoid(5), name: newName, number: newNumber };

      setContacts((state) => [...state, newContact]);
    }
  };

  const deleteContact = (contactId) => {
    setContacts((state) => state.filter((contact) => contact.id !== contactId));
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredList = contacts.filter((el) =>
    el.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter filter={filter} onChangeFilter={handleFilter} />
        <ContactList filteredList={filteredList} onDelete={deleteContact} />
      </Section>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
