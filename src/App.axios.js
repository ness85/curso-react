import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const axiosProducts = axios.create({
  headers: {
    Authorization: "Bearer eltokenquemehandado",
  },
  url: "https://api.example.com/products",
});

axiosProducts.interceptors.request.use((request) => {
  request.url = "https://jsonplaceholder.typicode.com/users";
  return request;
});

axiosProducts.interceptors.response.use((response) => {
  response.data = {
    mensaje: "Hola mundo",
  };
  return response;
});

axiosProducts.get().then(console.log);

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    axios.get(url).then(({ data }) => setUsers(data));
  }, []);

  useEffect(() => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "Mi título",
        body: "Mi contenido",
        userId: 1,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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