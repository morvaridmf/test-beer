import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import Beer from './components/beer/Beer';
import { AppProvider } from './Contex';


function App() {

  // const [beers, setBeers] = useState([])
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false)
  // const [currentpage, setCurrentPage] = useState(1)
  // const [beersPerPage] = useState(10)

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true)
  //     try {
  //       const res = await fetch(" https://api.punkapi.com/v2/beers")
  //       const data = await res.json()
  //       // console.log(data)
  //       setBeers(data)

  //     } catch (error) {
  //       setError(true)
  //     }
  //     setLoading(false)
  //   }

  //   getData();

  // }, [])
  // // get current beers
  // const indexOfLastBeer = currentpage * beersPerPage;
  // const indextOfFirstBeer = indexOfLastBeer - beersPerPage;
  // const currentBeers = beers.slice(indextOfFirstBeer, indexOfLastBeer)
  // // change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (
    <AppProvider>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/beer/:id" element={<Beer />} />

      </Routes>
    </AppProvider>
  );
}

export default App;
