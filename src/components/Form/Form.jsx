import React, { Component } from "react";
import css from './Form.module.css'

class Form extends Component {
  state = {
    name: '',
    // number: '',
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({ name: '' });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };



  render() {
    return (
        <>
         <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.form__label} htmlFor="">Name
        <input
        className={css.form__input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={this.handleChange}
        value={this.state.name}
        />
        </label>
        <button className={css.form__btn} type="submit">Add Contact</button>
      </form>
        </>
    )
  }
}

export default Form;