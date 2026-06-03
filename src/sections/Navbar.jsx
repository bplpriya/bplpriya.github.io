import { useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
    <ul className="nav-ul">
        {navLinks.map((item) => (
            <li key={item.id} className="nav-li">
                <a href={item.href} className="nav-li_a" onClick={onClick}>
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-sm border-b border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    {/* <a href="#home" className="serif text-white/80 text-lg hover:text-white transition-colors italic">
                        Bala Pavani
                    </a> */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white/40 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu">
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6 opacity-80" />
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems onClick={() => setIsOpen(false)} />
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
