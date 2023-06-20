import React, { Component } from "react";
import css from './Form.module.css'

class Form extends Component {
  state = {
    name: '',
    number: '',
  }

  render() {
    return (
        <>
         <form className={css.form}>
        <label className={css.form__label} htmlFor="">Name
        <input className={css.form__input} type="text" name="" id="" />
        </label>
        <button className={css.form__btn} type="submit">Add Contact</button>
      </form>
        </>
    )
  }
}

export default Form;