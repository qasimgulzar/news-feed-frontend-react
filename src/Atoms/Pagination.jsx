import {useSearchParams} from "react-router-dom";
import Spinner from "./Spinner";

const Pagination = ({results, currentPage, pageSize, loading}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className="flex flex-col items-center my-7">
            <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing <span
                className="font-semibold text-gray-900 dark:text-white">{(currentPage - 1) * pageSize}</span> to <span
                className="font-semibold text-gray-900 dark:text-white">{(currentPage) * pageSize}</span> of <span
                className="font-semibold text-gray-900 dark:text-white">{results?.totalResults | 0}</span> Entries
  </span>
            <div className="inline-flex mt-2 xs:mt-0">
                {loading ? <Spinner/> :
                    <button
                        onClick={() => setSearchParams({
                            q: searchParams.get('q'),
                            provider: searchParams.get('provider'),
                            page: currentPage + 1
                        })}
                        disabled={(results?.articles?.length | 0) < pageSize}
                        className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Load More
                    </button>
                }

            </div>
        </div>
    )
}
export default Pagination;