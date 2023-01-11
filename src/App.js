import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import Beer from './components/beer/Beer';


function App() {

  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const res = await fetch("http://localhost:3001/beers")
        const data = await res.json()
        // console.log(data)
        setBeers(data)

      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }

    getData();

  }, [])


  return (
    <Routes>
      <Route path="/" element={<Home beers={beers} setBeers={setBeers} loading={loading} />} />

      <Route path="/beer/:id" element={<Beer beers={beers} setBeers={setBeers} />} />

    </Routes>
  );
}

export default App;
