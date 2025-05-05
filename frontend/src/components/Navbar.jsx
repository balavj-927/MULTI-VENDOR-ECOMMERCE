// frontend/src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/frontend_assets/assets.js';
import { useContext, useState, useRef, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
    const dropdownRef = useRef(null);
    const searchRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        if (token) {
            setDropdownOpen(!dropdownOpen);
        } else {
            navigate('/login');
        }
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    };

    const performSearch = () => {
        if (searchQuery.trim()) {
            // Direct to collection page with search query
            navigate(`/collection?search=${encodeURIComponent(searchQuery.trim())}`);
            setSearchActive(false);
            setSearchQuery('');
        }
    };

    return (
        <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between py-5 font-['Roboto_Slab']">
                {/* Logo */}
                <Link to='/' className="mr-auto">
                    <img src={assets.logo} className='-ml-5 w-50' alt="logo" />
                </Link>
                
                {/* Navigation Links - Horizontally centered */}
                <ul className='hidden gap-8 text-sm font-medium md:flex'>
                    <NavLink to='/' className='flex flex-col items-center'>
                        {({ isActive }) => (
                            <>
                                <p className={`${isActive ? 'text-blue-600' : 'text-gray-700'}`}>HOME</p>
                                <hr className={`w-full border-none h-[2px] bg-blue-600 ${isActive ? 'block' : 'hidden'}`} />
                            </>
                        )}
                    </NavLink>
                    <NavLink to='/collection' className='flex flex-col items-center'>
                        {({ isActive }) => (
                            <>
                                <p className={`${isActive ? 'text-blue-600' : 'text-gray-700'}`}>COLLECTION</p>
                                <hr className={`w-full border-none h-[2px] bg-blue-600 ${isActive ? 'block' : 'hidden'}`} />
                            </>
                        )}
                    </NavLink>
                    <NavLink to='/about' className='flex flex-col items-center'>
                        {({ isActive }) => (
                            <>
                                <p className={`${isActive ? 'text-blue-600' : 'text-gray-700'}`}>ABOUT</p>
                                <hr className={`w-full border-none h-[2px] bg-blue-600 ${isActive ? 'block' : 'hidden'}`} />
                            </>
                        )}
                    </NavLink>
                    <NavLink to='/contact' className='flex flex-col items-center'>
                        {({ isActive }) => (
                            <>
                                <p className={`${isActive ? 'text-blue-600' : 'text-gray-700'}`}>CONTACT</p>
                                <hr className={`w-full border-none h-[2px] bg-blue-600 ${isActive ? 'block' : 'hidden'}`} />
                            </>
                        )}
                    </NavLink>
                </ul>
                
                {/* Right side icons - now with more space from the nav links */}
                <div className='flex items-center gap-6 ml-12'>
                    <div className='relative flex items-center' ref={searchRef}>
                        <button onClick={() => setSearchActive(!searchActive)} className="flex items-center justify-center w-8 h-8 hover:opacity-70">
                            <img src={assets.search_icon} alt="search" className='w-5' />
                        </button>
                        {searchActive && (
                            <div className='absolute right-0 z-20 pt-4'>
                                <div className='p-3 bg-white rounded shadow-md'>
                                    <div className='flex items-center overflow-hidden border rounded'>
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            onKeyDown={handleSearch}
                                            placeholder="Search products..."
                                            className='w-64 px-3 py-2 outline-none'
                                            autoFocus
                                        />
                                        <button 
                                            onClick={performSearch}
                                            className='px-4 py-2 text-white bg-blue-600'
                                        >
                                            Go
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='relative flex items-center' ref={dropdownRef}>
                        <button 
                            onClick={toggleDropdown} 
                            className="flex items-center justify-center w-8 h-8 hover:opacity-70"
                        >
                            <img src={assets.profile_icon} alt="profile" className='w-5' />
                        </button>
                        {token && dropdownOpen &&
                            <div className='absolute right-0 z-20 pt-4 dropdown-menu'>
                                <div className='flex flex-col items-center gap-2 py-3 text-gray-500 rounded shadow-md w-36 bg-slate-100'>
                                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                                    <p onClick={() => {
                                        navigate('/orders');
                                        setDropdownOpen(false);
                                    }} className='cursor-pointer hover:text-black'>Orders</p>
                                    <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                                </div>
                            </div>
                        }
                    </div>
                    <Link to='/cart' className='relative flex items-center justify-center w-8 h-8 hover:opacity-70'>
                        <img src={assets.cart_icon} className='w-5' alt="cart" />
                        <div className='absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-blue-600 rounded-full -top-1 -right-1'>
                            {getCartCount()}
                        </div>
                    </Link>
                    <Link to='/chat' className='relative flex items-center justify-center w-8 h-8 hover:opacity-70'>
                        <img src={assets.chat_icon} className='w-5' alt="chat" />
                    </Link>
                    <button onClick={() => setVisible(true)} className="flex items-center justify-center w-8 h-8 hover:opacity-70 md:hidden">
                        <img src={assets.menu_icon} className='w-5' alt="menu" />
                    </button>
                </div>
                
                {/* Mobile Menu */}
                <div className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-white transition-all shadow-xl ${visible ? 'w-64' : 'w-0'}`}>
                    <div className='flex flex-col font-["Roboto_Slab"] text-gray-700'>
                        <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 border-b cursor-pointer'>
                            <img src={assets.dropdown_icon} alt="dropdown" className='h-4 rotate-180' />
                            <p>Close Menu</p>
                        </div>
                        <NavLink 
                            onClick={() => setVisible(false)} 
                            className={({ isActive }) => `py-3 px-6 border-b ${isActive ? 'text-blue-600 bg-gray-50' : ''}`} 
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            onClick={() => setVisible(false)} 
                            className={({ isActive }) => `py-3 px-6 border-b ${isActive ? 'text-blue-600 bg-gray-50' : ''}`} 
                            to='/collection'
                        >
                            Collection
                        </NavLink>
                        <NavLink 
                            onClick={() => setVisible(false)} 
                            className={({ isActive }) => `py-3 px-6 border-b ${isActive ? 'text-blue-600 bg-gray-50' : ''}`} 
                            to='/about'
                        >
                            About
                        </NavLink>
                        <NavLink 
                            onClick={() => setVisible(false)} 
                            className={({ isActive }) => `py-3 px-6 border-b ${isActive ? 'text-blue-600 bg-gray-50' : ''}`} 
                            to='/contact'
                        >
                            Contact
                        </NavLink>
                        <NavLink 
                            onClick={() => setVisible(false)} 
                            className={({ isActive }) => `py-3 px-6 border-b ${isActive ? 'text-blue-600 bg-gray-50' : ''}`} 
                            to='/chat'
                        >
                            Chat with Seller
                        </NavLink>
                        {/* Add search in mobile menu */}
                        <div className="p-4 border-b">
                            <div className='flex items-center overflow-hidden border rounded'>
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={handleSearch}
                                    placeholder="Search products..."
                                    className='flex-1 px-3 py-2 outline-none'
                                />
                                <button 
                                    onClick={() => {
                                        if (searchQuery.trim()) {
                                            navigate(`/collection?search=${encodeURIComponent(searchQuery.trim())}`);
                                            setVisible(false);
                                            setSearchQuery('');
                                        }
                                    }}
                                    className='px-4 py-2 text-white bg-blue-600'
                                >
                                    Go
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Overlay for mobile menu and dropdowns */}
                {(visible || searchActive) && (
                    <div 
                        className="fixed inset-0 z-10 bg-black bg-opacity-50"
                        onClick={() => {
                            setVisible(false);
                            setSearchActive(false);
                        }}
                    ></div>
                )}
            </div>
        </div>
    );
};

export default Navbar;