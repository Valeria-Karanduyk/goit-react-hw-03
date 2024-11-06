import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contactList, handleDelete }) => {
  return (
    <ul className={s.listbox}>
      {contactList.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
