import React from 'react'
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className='container'>
            <div className='navbar w-50 d-flex mx-auto bg-info p-4 mb-4 border border-dark rounded-5'>
                <h1 >Facted Up</h1>
                <button className='rounded-3 border no-border shadow-lg'>
                    <Link className='text-decoration-none text-dark' to='/main'>Home</Link>
                </button>
                <button className='rounded-3 border no-border'>
                    <Link className='text-decoration-none text-dark' to='/favs'>Favs</Link>
                </button>

                {/* text capability  */}
                {/* <button className='rounded-3 border no-border'>
                    <Link className='text-decoration-none text-dark' to='/daily'>Text me!</Link>
                </button> */}
            </div>
        </div>
    )
}

export default NavBar