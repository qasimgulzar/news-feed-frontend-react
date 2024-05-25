import HomeTemplate from "../Templates/HomeTemplate";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import moment from "moment";

const Home = () => {
    const preferences = JSON.parse(localStorage.getItem('preferences') || '{}')
    const [state, setState] = useState({
        provider: preferences.provider || 'newsapi',
        q: '',
        from: preferences.from || moment().format('YYYY-MM-DD'),
        source: preferences.source || '',
        section: preferences.section || '',
        page: 1,
        pageSize: 100
    });
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        setSearchParams(state, {replace: true});
    }, [state]);
    return <HomeTemplate/>
}

export default Home;