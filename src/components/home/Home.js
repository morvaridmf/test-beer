import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate"


function Home({ beers, loading }) {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)

    const handlePageClick = (data) => {
        const pageNumber = data.selected
        console.log(data.selected)

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(pageNumber)
        // }

        // fetch(`http://localhost:3001/beers`, requestOptions)
        //     .then(res => res.json())
        //     .then(data => console.log("edit", data))

    }




    return (
        <div>
            <h1>Beers...</h1>
            <div>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
                <div>
                    {loading ? (<h1>Loading....</h1>) : (
                        <>

                            {beers.length > 0 && beers.filter(beer => beer.name.toLowerCase().includes(search)).map(beer => (
                                <div key={beer.id}>
                                    <Link to={`/beer/${beer.id}`}>
                                        <h3>{beer.name}</h3>
                                        <p>{beer.tagline}</p>
                                        <p>{beer.abv}</p>
                                        <img src={beer.image_url} />
                                    </Link>

                                </div>
                            ))
                            }
                        </>
                    )}

                </div>
            </div>
            <div>
                <ReactPaginate previousLabel={"Prev"}
                    nextLabel={"Next"} breakLabel={"..."}
                    pageCount={20}
                    onPageChange={handlePageClick}
                />

            </div>

        </div>
    )
}

export default Home