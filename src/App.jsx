import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import FavoritePage from "./FavoritePage.jsx";
import HomePage from "./HomePage";
import Navbar from "./Navbar.jsx";

function App() {
  const url = "https://randomuser.me/api/?results=5";
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const request = await fetch(url);
    const data = await request.json();
    setUsers(data.results);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage users={users} />} />
        <Route path="/favorites" element={<FavoritePage users={users} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
