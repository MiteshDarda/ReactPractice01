import React, { useState } from "react";

import AddUsers from "./Users/AddUsers";
import UsersList from "./Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prev) => {
      return [...prev, { name: uName, age: uAge }];
    });
  };

  return (
    <>
      <AddUsers onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
