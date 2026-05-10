import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {logoutUser} from "../actions/user_action"
import {Link} from "react-router-dom"
import {filterHostel} from "../actions/hostel_action"

const Navbar = () => {
  const[searchKey,setSearchKey] = useState("");
   const dispatch = useDispatch();
   const {currentUser} = useSelector(state => state.userLoginReducer);
   
   function handleClick() {
    setInterval(function() {
      window.location.reload();
    }, 100);
  }
  // function handleClick() {
  //   window.location.reload();
  //   };
  
    return (
        <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" onClick={handleClick} className="flex-shrink-0 flex items-center">
                            <img className="h-10 w-10 rounded-lg object-cover" src="../../../images/logo.jpeg" alt="StayBay Logo" />
                            <span className="ml-3 text-xl font-bold text-gray-800">StayBay</span>
                        </Link>
                    </div>

                    {currentUser && (
                        <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                            <div className="max-w-lg w-full lg:max-w-xs">
                                <label htmlFor="search" className="sr-only">Search</label>
                                <div className="relative flex">
                                    <input
                                        id="search"
                                        name="search"
                                        className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-l-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="Search"
                                        type="search"
                                        value={searchKey}
                                        onChange={(e) => setSearchKey(e.target.value)}
                                    />
                                    <button
                                        onClick={() => dispatch(filterHostel(searchKey))}
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex items-center lg:ml-4">
                        {currentUser ? (
                            <div className="relative ml-3 group">
                                <div>
                                    <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                                        <img className="h-10 w-10 rounded-full object-cover border-2 border-gray-200" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="User Avatar" />
                                    </button>
                                </div>
                                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg hidden group-hover:block z-50">
                                    <div className="py-1 rounded-md bg-white shadow-xs">
                                        <Link to="/profile" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Payment</Link>
                                        <Link to="/list" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900">Profile</Link>
                                        <Link to="/login" onClick={() => dispatch(logoutUser())} className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">Logout</Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="ml-4 flex items-center md:ml-6">
                                <Link to="/login" className="text-gray-500 hover:text-gray-900 font-medium px-3 py-2 rounded-md transition duration-150 ease-in-out">Login</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;