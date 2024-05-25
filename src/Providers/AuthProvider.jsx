import {createContext, useContext, useState} from "react";
import axios from "../AxiosClient";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate()
    const login = async (data) => {
        const res = await axios.post('/api/login', data);
        const {authorisation, user} = res.data
        switch (res.status) {
            case 200: {
                const {token} = authorisation;
                localStorage.setItem("site", token);
                setToken(token);
                navigate('')
                break;
            }
            default: {
                setToken('');
                localStorage.setItem("site", '');
                break;
            }
        }
    };
    const register = async (data) => {
        let payload = {}
        try {
            const res = await axios.post('/api/register', data);
            payload = {
                ...res.data
            }
        } catch (e) {
            payload = {
                ...e.response.data
            }
        }

        return payload;

    }
    const isAuthenticated = () => {
        return !!token;
    }
    return <AuthContext.Provider value={{login, register, token, isAuthenticated}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => {
    return useContext(AuthContext);
};