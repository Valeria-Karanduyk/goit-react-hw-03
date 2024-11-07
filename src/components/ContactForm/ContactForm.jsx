import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useId } from "react";
import { MdPersonAddAlt1 } from "react-icons/md";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long")
    .required("Required"),
});

const emptyValues = {
  id: "",
  name: "",
  number: "",
};

const ContactForm = ({ handleSubmit }) => {
  const idName = useId();
  const idNumber = useId();

  return (
    <Formik
      initialValues={emptyValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <div className={s.labelBox}>
          <label htmlFor={idName}>Name</label>
          <ErrorMessage name="name" component="span" />
        </div>
        <Field type="text" name="name" id={idName} className={s.input} />
        <div className={s.labelBox}>
          <label htmlFor={idNumber}>Number</label>
          <ErrorMessage name="number" component="span" />
        </div>
        <Field type="text" name="number" id={idNumber} className={s.input} />
        <button type="submit" className={s.btn}>
          <MdPersonAddAlt1 />
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
