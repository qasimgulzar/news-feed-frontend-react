import NewsPost from "./NewsPost";
import {useEffect, useState} from "react";
import NewsService from "../Services/NewsService";
import Pagination from "../Atoms/Pagination";
import {useSearchParams} from "react-router-dom";

const NewsFeed = () => {
    const [feed, setfeed] = useState({});
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState({pageSize: 100});
    const newsService = new NewsService();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setLoading(true);
        newsService.fetchNews(
            searchParams.get('pageSize'),
            searchParams.get('page'),
            searchParams.get('provider'),
            searchParams.get('q'),
            searchParams.get('section'),
            searchParams.get('source'),
            searchParams.get('from'),
        ).then(res => {
            setfeed(res.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }, [state, searchParams]);
    return (
        <div class="container my-24 mx-auto md:px-6">
            <section class="mb-32 text-center">
                {feed?.articles?.map((p) => <NewsPost post={p}/>)}
            </section>
            <Pagination loading={loading} results={feed} currentPage={parseInt(searchParams.get('page'))}
                        pageSize={state.pageSize}/>
        </div>
    );
}

export default NewsFeed;