import { useState, useEffect } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm.js";
import ContactList from "./components/ContactList.js";
import './components/Contacts.css';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts')
  //   const parsedContacts = JSON.parse(contacts)

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  
  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts')
  //   const parsedContacts = JSON.parse(contacts)

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  
  //   if (contacts !== setContacts(contacts)) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts))
  //   }
  //   }, [])

  // const submitPhoneBook = event => {
  //   event.preventDefault();

  //   const existingContact = contacts.find(contact =>
  //     contact.name === name);
  //       if (existingContact) {
  //         alert(`This name ${name} already exists`)
  //           return
  //   }

  //   const contact = {
  //     id: shortid.generate(),
  //     name: name,
  //     number: number,
  //     completed: false
  //   };

  //   setContacts([...contacts, contact]);
  //   setName('');
  //   setNumber('');
    
  //   localStorage.setItem('contacts', JSON.stringify([...contacts, contact]));
  // }

  useEffect(() => {
  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);

  if (parsedContacts) {
    setContacts(parsedContacts);
  }
}, []);

const submitPhoneBook = event => {
  event.preventDefault();

  const existingContact = contacts.find(contact => contact.name === name);
  if (existingContact) {
    alert(`This name ${name} already exists`);
    return;
  }

  const contact = { 
    id: shortid.generate(),
    name: name,
    number: number,
    completed: false
  };

  setContacts([...contacts, contact]);
  setName('');
  setNumber('');

  // Очищаємо localStorage від старих даних
  localStorage.setItem('contacts', JSON.stringify([...contacts, contact]));
};


  const foneBookChange = event => {
    setName(event.currentTarget.value)
  };

  const filterChange = event => {
    setFilter(event.currentTarget.value);
  };

  // const getVisibleСontacts = () => {
  //   const normalizeFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // }

const getVisibleСontacts = () => {
  if (contacts) {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  } else {
    return [];
  }
};


  const DeleteContacts = contactId => {
  setContacts(prevContacts =>
    prevContacts.filter(contact => contact.id !== contactId)
  );
};

  const visibleСontactsFilter = getVisibleСontacts();

  return (
    <div className="App Container">
      <ContactForm
        name={name}
        number={number}
        foneBookChange={foneBookChange}
        submitPhoneBook={submitPhoneBook}
      />

      <h2>Contacts</h2>
      <h3>Find contacts by name</h3>

      <label className="Search">
        Search
        <input type="text"
          value={filter}
          onChange={filterChange} />
      </label>

      <ContactList
        contacts={visibleСontactsFilter}
        DeleteContacts={DeleteContacts}
      />
    </div>
  );
};

export default App;




// import { Component } from 'react';
// import PhoneContacts from './components/PhoneContacts.js'
// import Statics from './components/Statics.js';
// import './App.css';
// import shortid from 'shortid';
// import ContactsJson from './components/Contacts.json';
// import { PhoneBookForm } from './components/PhoneBookForm.js';

// function App() {

//   return (
//     <div className="App">
//       <Statics />
//     </div>
//   );
// };


// class App extends Component {

//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ],
//     filter: '',
//     name: '',
//     number: ''
// }

//   submitPhoneBook = event => {
//     event.preventDefault()

//     const { contacts, name, number } = this.state;

//     const contact = { 
//       id: shortid.generate(),
//       name: name,
//       number: number,
//       completed: false
//     }
//     this.setState({
//       contacts:
//         [...contacts, contact],
//         name: '',
//         number: ''
//     });
// }

//   foneBookChange = event => {
//     const { name, value, number } = event.currentTarget;

//     this.setState({
//       [name]: value,
//       [number]: value
//     })
//   }

//   filterChange = event => {
//   this.setState({ filter: event.currentTarget.value });
// }

//   getVisibleСontacts = () => {

//     const { filter, contacts } = this.state;
//     const normalizeFilter = filter.toLowerCase()
    
//     return contacts.filter(contact => 
//       contact.name.toLowerCase().includes(normalizeFilter))
//   }

//   render() {
//     const {  name, number, filter } = this.state;

//     const visibleСontactsFilter = this.getVisibleСontacts();

//     return (
//       <div className="App">
        
//         <form onSubmit={this.submitPhoneBook}>
//           <label>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={name}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               onChange={this.foneBookChange}
//             />
//           </label>

//           <label>
//             Number
//             <input
//               type="tel"
//               name="number"
//               value={number}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               onChange={this.foneBookChange}
//             />
//           </label>

//           <button type='submit'>Add Contacts</button>

//           <h2>Contacts</h2>
//           <h3>Find contacts by name</h3>

//           <label>
//             Search
//             <input type='text'
//               value={filter}
//               onChange={this.filterChange}
//             />
//           </label>

//           <ul>
//             {visibleСontactsFilter.map(({ id, name, number }) => (
//                 <li key={id}>
//                   <p>{name}:</p>
//                   <p>{number}</p>
//                 </li>
//             ))}
            
//           </ul> 
          
//         </form>
//       </div>
//     );
//   }
// }

// export default App;