import ContactForm from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import s from './ContactsView.module.css';

export default function App() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Phonebook</h2>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
