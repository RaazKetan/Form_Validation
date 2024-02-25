import { useState } from "react";
import useInput from "./hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value=>value.trim() !== "");
  const{
    value:enteredLastName,
    isValid:enteredLastNameIsValid,
    hasError:lastNameInputHasError,
    valueChangeHandler:lastNameInputChangeHandler,
    inputBlurHandler:lastNameBlurHandler,
    reset:resetLastNameInput,
  } = useInput(value=>value.trim() !== "");
  const{
    value:enteredEmail,
    isValid:enteredEmailIsValid,
    hasError:emailInputHasError,
    valueChangeHandler:emailInputChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset:resetEmailInput,
  } = useInput(value=>value.includes('@'));
  
  const formSubmissionHandler = (event) => {
    
    event.preventDefault();
    if (!enteredNameIsValid || !enteredLastNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };
  let formIsValid = false;
  if (enteredName.trim() !== "" && enteredLastName.trim() !== "" && enteredEmail.includes('@')) {
    formIsValid = true;
  }

  const firstNameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';



  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" 
            onChange={nameInputChangeHandler}
            value={enteredName}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError&& <p className="error-text">Name must not be empty.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name"
          onChange={lastNameInputChangeHandler}
          value={enteredLastName}
          onBlur={lastNameBlurHandler}
           />
          {lastNameInputHasError&& <p className="error-text">Last Name must not be empty.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" 
        onChange={emailInputChangeHandler}
        value={enteredEmail}
        onBlur={emailBlurHandler}
        />
        {emailInputHasError&& <p className="error-text">Email must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled = {!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
