import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Container from "./components/Container";
import Section from "./components/Section";

import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
