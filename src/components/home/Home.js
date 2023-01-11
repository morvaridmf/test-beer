import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


function Home({ beers, loading }) {
    const [search, setSearch] = useState("")


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

        </div>
    )
}

export default Home