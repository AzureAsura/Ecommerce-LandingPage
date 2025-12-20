import React from 'react'
import { Navbar_Link } from '../constants'

const Navbar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Logo" />

                <ul>
                    {Navbar_Link.map((link) => (
                        <li key={link.label}>
                            <a href="">{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className='flex-center gap-3'>
                    <button>
                        <img src="/search.svg" alt="search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar