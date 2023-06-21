import React, { Component } from "react";
import css from './App.module.css'
import Form from "./Form/Form";
// import Contacts from "./Contacts/Contacts";
import { nanoid } from 'nanoid'

class App extends Component {
  state = {
    contacts: [],
    name: '',
  }

  

  creatContact = data => {
    const { name } = data;
    const contact = {
      name: name,
      id: nanoid(),
    };
    // console.log(data);

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))}

  render() {
    return (
      <div className={css.container}>
       <h1 className={css.title}>Phonebook</h1>
     <Form creatContact={this.creatContact}>

     </Form>
      <h2 className={css.contacts__title}>Contacts</h2>
      {/* <Contacts>
        
      </Contacts> */}
      <ul className={css.contacts__list}>
        {/* {this.creatContact().map(({ id, name }) => {
          return(
            <li className={css.contacts__item} key={id}>
          <p className={css.contacts__text} >{name}
            </p>
            </li>

          )
        })}
         */}
      </ul>
      </div>
     

    )
  }
}

export default App;