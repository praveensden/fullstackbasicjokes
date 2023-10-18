import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  const getJokes = async () => {
    const response = await axios.get("/api/jokes");
    if (response && response?.status === 200) {
      setJokes(response?.data);
      console.log(response?.data, "res");
    }
  };
  useEffect(() => {
    getJokes();
  }, []);
  return (
    <>
      <h1>chai aur backend</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes && jokes.length > 0 ? (
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.body}</p>
          </div>
        ))
      ) : (
        <h3>No jokes </h3>
      )}
    </>
  );
}

export default App;
