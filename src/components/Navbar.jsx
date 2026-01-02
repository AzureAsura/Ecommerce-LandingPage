import React from 'react'
import { Navbar_Link } from '../constants'

const Navbar = () => {
    return (
        <header className='w-screen fixed top-0 left-0 z-100 flex-center bg-black min-h-[7vh]'>
            <nav className='container mx-auto flex-between px-5 2xl:px-0'>
                <img src="/favi.png" alt="Logo" className='cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out w-10'/>

                <ul className='flex-center gap-8'>
                    {Navbar_Link.map((link) => (
                        <li key={link.label}>
                            <a href="" className=' hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out'>{link.label}</a>
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