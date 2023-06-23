import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((usersData) => setUsers(usersData));
    // .then(data => console.log(data))
  }, []);
  return (
    <div className="App">
      {users.length === 0 ? (
        <h1>Todavía no hay usuarios</h1>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;