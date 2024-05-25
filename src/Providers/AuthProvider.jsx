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
                setToken(token);
                localStorage.setItem("site", token);
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
    return <AuthContext.Provider value={{login, register, token}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => {
    return useContext(AuthContext);
};