import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    setLoading(true);
    // Buscar los usuarios en la api
    // Asignarlos a users con setUsers

    // try {
    //   const res = await axios.get(url)

    //   console.log(res)
    //   setUsers(res.data)
    //   setLoading(false)
    // } catch(e) {
    //   console.error("Ha habido un error", e)
    // }

    const res = await axios
      .get(url)
      .catch((error) => console.error("Ha habido un error", error));
    
    console.log(res);
    setUsers(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h2>CARGANDO...</h2>
      ) : users.length === 0 ? (
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