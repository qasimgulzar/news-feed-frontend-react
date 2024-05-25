import '../App.css';
import 'flowbite';
import {Link, useLocation, useNavigate, useSearchParams} from "react-router-dom";
import SearchBarForm from "./SearchBarForm";
import {useEffect, useState} from "react";
import {useAuth} from "../Providers/AuthProvider";

const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const auth = useAuth();
    const [searchParams, setSearchParams] = useSearchParams();
    const [state, setState] = useState({searchParams: Object.fromEntries(searchParams.entries())});
    useEffect(() => {
        setState({...state, searchParams: Object.fromEntries(searchParams.entries())})
    }, [searchParams]);
    return (


        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 border-2">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span
                        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        My News Feed
                    </span>
                </a>

                {(['/preferences', '/login', '/signup', '/'].indexOf(location.pathname) == -1) ?
                    <div className="w-[500px]">
                        <SearchBarForm></SearchBarForm>
                    </div> : <></>}


                <div className="w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className={`${!auth.isAuthenticated()?'hidden ':''}flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
                        <li>
                            {((location.pathname !== '/') ?
                                (<Link to={{pathname: "/"}}
                                       className={`block ${(location.pathname == '/' ? 'text-white bg-blue-700' : 'text-gray-900')} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                                       aria-current="page">Feed</Link>)
                                : (<span
                                    className='block rounded hover:bg-gray-100 text-white bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Feed</span>))}
                        </li>
                        <li>
                            {(location.pathname !== '/search') ?
                                (<Link to={{pathname: "/search", query: state.searchParams}}
                                       className={`block ${(location.pathname == '/search' ? 'text-white bg-blue-700' : 'text-gray-900')} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Search</Link>) :
                                (<span
                                    className='block rounded hover:bg-gray-100 text-white bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Search</span>)
                            }
                        </li>
                        <li>
                            <Link to={{pathname: "/preferences"}}
                                  className={`block ${(location.pathname == '/preferences' ? 'text-white bg-blue-700' : 'text-gray-900')} rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Preference</Link>
                        </li>
                        {(auth.isAuthenticated() ? (<li>
                            <Link onClick={() => {
                                localStorage.removeItem('site');
                                window.location = '/';
                            }}
                                  className={`block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>Logout</Link>
                        </li>) : (<></>))}

                    </ul>
                </div>
            </div>
        </nav>

    );
}
export default Navigation;
