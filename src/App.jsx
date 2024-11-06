import { useEffect, useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";

const App = () => {
  const initContacts = () => {
    if (localStorage.getItem("contacts") === null) {
      return [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      ];
    } else {
      return JSON.parse(localStorage.getItem("contacts"));
    }
  };

  const [contactList, setContactList] = useState(initContacts);
  useEffect(
    () => localStorage.setItem("contacts", JSON.stringify(contactList)),
    [contactList]
  );

  const [search, setSearch] = useState("");
  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(search)
  );

  const handleSearch = (e) => setSearch(e.target.value.toLowerCase());
  const handleSubmit = (values, actions) => {
    const data = { ...values, id: nanoid(4) };
    actions.resetForm();
    setContactList((prev) => [...prev, data]);
  };
  const handleDelete = (id) => {
    setContactList(() => contactList.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox handleSearch={handleSearch} search={search} />
      <ContactList contactList={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
