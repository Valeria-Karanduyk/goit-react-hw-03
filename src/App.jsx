import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";

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

  return (
    <div>
      <h1>
        Phone<span>book</span>
      </h1>
      <ContactList />
    </div>
  );
};

export default App;
