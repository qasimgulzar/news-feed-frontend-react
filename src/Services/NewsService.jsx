import axios from '../AxiosClient';
import moment from "moment";

export default class NewsService {
    fetchNews(
        pageSize = 100,
        page = 1,
        provider = 'newsapi',
        q = '',
        section = '',
        source = '',
        from = ''
    ) {
        return axios.get('/api/feed', {
            params: {
                provider: provider,
                page: page,
                q: q,
                section,
                source,
                from: (from || moment().format('YYYY-MM-DD')),
                pageSize
            }
        });
    }

    fetchSources() {
        return axios.get('/api/sources');
    }
}