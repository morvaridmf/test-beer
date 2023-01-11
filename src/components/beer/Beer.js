import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";


function Beer({ beers }) {
    const id = useParams().id;
    const selectedBeer = beers.find(beer => beer.id == id)
    console.log(selectedBeer)


    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false)

    // useEffect(() => {
    //     const getData = async () => {
    //         setLoading(true)
    //         try {
    //             const res = await fetch(`http://localhost:3001/beers/${id}`)
    //             const data = await res.json()
    //             console.log("mmm", data)

    //             setBeer(data)



    //         } catch (error) {
    //             setError(true)
    //         }
    //         setLoading(false)
    //     }

    //     getData();


    // }, [])


    return (
        <div>
            <Link to={"/"}>
                <h2>Home</h2>

            </Link>
            <div>
                <p> <span>Brewers_tips: </span>{selectedBeer.brewers_tips}</p>
                <p><span>Contributed_by: </span>{selectedBeer.contributed_by}</p>
                <p><span>Description: </span>{selectedBeer.description}</p>

                <p> <span>First_brewed: </span>{selectedBeer.first_brewed}</p>
                <p>  <span>Volume: </span>{selectedBeer.boil_volume.value} {selectedBeer.boil_volume.unit}</p>
                <h3>Ingrediants: </h3>
                <h2>Malt</h2>
                {(selectedBeer.ingredients.malt).map(m => (
                    <ul>
                        <li>{m.name}</li>
                    </ul>
                ))}
                <h2>Hops</h2>
                {(selectedBeer.ingredients.hops).map(h => (
                    <ul>
                        <li>{h.name}</li>
                    </ul>
                ))}
                <h2>Yeast</h2>
                <ul>
                    <li>{selectedBeer.ingredients.yeast}</li>
                </ul>

            </div>


        </div>
    )
}

export default Beer