import s from "./Contact.module.css";
import { FaTrashAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

const Contact = ({ contact, handleDelete }) => {
  return (
    <li className={s.listItem}>
      <div className={s.itemBox}>
        <p className={s.name}>
          <BsPersonFill className={s.icon} />
          {contact.name}
        </p>
        <p className={s.number}>
          <MdPhone className={s.icon} />
          {contact.number}
        </p>
      </div>
      <button onClick={() => handleDelete(contact.id)} className={s.btn}>
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default Contact;
