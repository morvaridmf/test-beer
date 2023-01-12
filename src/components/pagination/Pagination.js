import React from 'react'

function Pagination({ beersPerPage, totalBeers, paginate }) {

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