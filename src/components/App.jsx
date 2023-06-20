import React, { Component } from "react";
import css from './App.module.css'
import Form from "./Form/Form";
import Contacts from "./Contacts/Contacts";

class App extends Component {
  state = {
    contacts: [],
    name: '',
  }

  render() {
    return (
      <div className={css.container}>
       <h1 className={css.title}>Phonebook</h1>
     <Form>

     </Form>
      <h2 className={css.contacts__title}>Contacts</h2>
      <Contacts>
        
      </Contacts>
      </div>
     

    )
  }
}

export default App;