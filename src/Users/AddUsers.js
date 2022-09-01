import { useState, useRef } from "react";
import styles from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUsers(props) {
  const enteredUsernameRef = useRef();
  const enteredAgeRef = useRef();
  const [error, setError] = useState();

  function addUserHandler(e) {
    e.preventDefault();
    const enteredUsername = enteredUsernameRef.current.value;
    const enteredAge = enteredAgeRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ( > 0 ).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    enteredUsernameRef.current.value = "";
    enteredAgeRef.current.value = "";
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={enteredUsernameRef} />
          <label htmlFor="age">Age</label>
          <input id="age " type="number" ref={enteredAgeRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUsers;
