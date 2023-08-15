import { Component } from 'react';
// import PhoneContacts from './components/PhoneContacts.js'
// import { Statics } from './components/Statics.js';
import './App.css';
import shortid from 'shortid';

// class App extends Component {

//   render() {

//     return (
//       <div className="App">
//         <Statics />
//       </div>
//     );
//   }
// }

class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
}

  submitPhoneBook = event => {
    event.preventDefault()

    const { contacts, name, number } = this.state;

    const contact = { 
      id: shortid.generate(),
      name: name,
      number: number,
      completed: false
    }
    this.setState({
      contacts:
        [...contacts, contact],
        name: '',
        number: ''
    });
}

  foneBookChange = event => {
    const { name, value, number } = event.currentTarget;

    this.setState({
      [name]: value,
      [number]: value
    })
  }

  filterChange = event => {
  this.setState({ filter: event.currentTarget.value });
}

  getVisibleСontacts = () => {

    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase()
    
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizeFilter))
  }

  render() {
    const {  name, number, filter } = this.state;

    const visibleСontactsFilter = this.getVisibleСontacts();

    return (
      <div className="App">
        <form onSubmit={this.submitPhoneBook}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.foneBookChange}
            />
          </label>

          <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.foneBookChange}
            />
          </label>

          <button type='submit'>Add Contacts</button>

          <h2>Contacts</h2>
          <h3>Find contacts by name</h3>

          <label>
            Search
            <input type='text'
              value={filter}
              onChange={this.filterChange}
            />
          </label>

          <ul>
            {visibleСontactsFilter.map(({ id, name, number }) => (
                <li key={id}>
                  <p>{name}:</p>
                  <p>{number}</p>
                </li>
            ))}
            
          </ul>
          
        </form>
      </div>
    );
  }
}

export default App;
