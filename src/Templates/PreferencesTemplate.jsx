import 'flowbite';
import LoginButton from "../Atoms/LoginButton";
import {useEffect, useState} from "react";
import NewsService from "../Services/NewsService";
import moment from "moment";

const PreferencesTemplate = () => {
    const newsService = new NewsService();
    const [state, setState] = useState({
        sources: [],
        preferences: JSON.parse(localStorage.getItem('preferences') || '{}')
    });
    useEffect(() => {
        newsService.fetchSources().then((res) => {
            setState({...state, sources: res.data.sources || []})
        },);
    }, []);
    return (<div className="flex justify-center">
        <div
            className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border my-7 p-4">
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const payload = {
                        source: e.target[0].value,
                        section: e.target[1].value,
                        provider: e.target[2].value,
                        from: moment(e.target[3].value).format('YYYY-MM-DD')
                    };
                    setState({...state, preferences: payload});

                    localStorage.setItem('preferences', JSON.stringify(payload));
                }}>
                    <label for="sources">Preferred Source</label>
                    <select id="sources" className="w-full mt-3 mb-4" value={state.preferences.source} onChange={
                        (e) => setState({
                        ...state,
                        preferences: {...state.preferences, source: e.target.value}
                    })}>
                        {state.sources.map((s) => <option value={s.id}>{s.name}</option>)}
                    </select>
                    <label htmlFor="sections">Preferred Section</label>
                    <select id="sections" className="w-full mt-3 mb-4" value={state.preferences.section} onChange={
                        (e) => setState({
                            ...state,
                            preferences: {...state.preferences, section: e.target.value}
                        })}>
                        <option value="business">Business</option>
                        <option value="media">Media</option>
                        <option value="technology">Technology</option>
                        <option value="housing-network">Housing Network</option>
                    </select>
                    <label htmlFor="providers">Preferred Provider</label>
                    <select id="providers" className="w-full mt-3 mb-4" value={state.preferences.provider} onChange={
                        (e) => setState({
                            ...state,
                            preferences: {...state.preferences, provider: e.target.value}
                        })}>
                        <option value="newsapi">Newsapi</option>
                        <option value="guardianapis">Guardianapis</option>
                    </select>
                    <label>Feed From</label>
                    <input type="date" className="w-full mt-3 mb-4" value={state.preferences.from} required onChange={
                        (e) => setState({
                            ...state,
                            preferences: {...state.preferences, from: moment(e.target.value).format('YYYY-MM-DD')}
                        })}/>
                    <LoginButton>Save</LoginButton>
                </form>

            </div>
        </div>
    </div>)
}

export default PreferencesTemplate;