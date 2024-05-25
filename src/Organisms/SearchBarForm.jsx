import 'flowbite';
import {useEffect, useRef, useState} from "react";
import {useSearchParams} from 'react-router-dom'

const SearchBarForm = () => {
    const preferences = JSON.parse(localStorage.getItem('preferences') || '{}')
    const [state, setState] = useState({
        provider: preferences.provider || 'newsapi',
        q: '',
        from:preferences.from,
        source:preferences.source,
        section:preferences.section,
        page: 1,
        pageSize: 100
    });
    const [searchParams, setSearchParams] = useSearchParams();
    const textInput = useRef(null);

    useEffect(() => {
        setSearchParams(state, {replace: true});
    }, [state]);

    return (

        <form className="max-w-lg mx-auto my-2">
            <div className="flex">
                <label htmlFor="search-dropdown"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button">{searchParams.get('provider') == 'newsapi' ? 'News Api' : 'Guardian'}
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="false"
                         xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                <div id="dropdown"
                     className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                        <li>
                            <button type="button"
                                    onClick={() => setState({...state, provider: 'newsapi'})}
                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News
                                Api
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                    onClick={() => setState({...state, provider: 'guardianapis'})}
                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Guardian
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="relative w-full">
                    <input type="search" id="search-dropdown"
                           ref={textInput}
                           className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                           placeholder="Search News, Articles..." required/>
                    <button type="button"
                            onClick={(ele) => setState({...state, q: textInput.current.value})}
                            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>

    );
}
export default SearchBarForm;
