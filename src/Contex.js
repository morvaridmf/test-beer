import React, { useEffect, useState, useContext } from "react"


const AppContext = React.createContext()
function AppProvider({ children }) {

    const [beers, setBeers] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [currentpage, setCurrentPage] = useState(1)
    const [beersPerPage] = useState(10)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const res = await fetch(` https://api.punkapi.com/v2/beers?name=buzz`)
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
    // get current beers
    const indexOfLastBeer = currentpage * beersPerPage;
    const indextOfFirstBeer = indexOfLastBeer - beersPerPage;
    const currentBeers = beers.slice(indextOfFirstBeer, indexOfLastBeer)
    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <AppContext.Provider value={{ currentBeers, setBeers, loading, beersPerPage, beers, paginate }}>
            {children}
        </AppContext.Provider >
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppProvider, AppContext }