import React from 'react'
import { useGlobalContext } from '../../Contex';

function Pagination() {
    const { beersPerPage, paginate, beers } = useGlobalContext()
    const totalBeers = beers.length


    const pageNumabers = [];
    for (let i = 1; i <= Math.ceil(totalBeers / beersPerPage); i++) {
        pageNumabers.push(i)
    }
    return (
        <div>
            <ul>
                {pageNumabers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href='#'>{number}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination