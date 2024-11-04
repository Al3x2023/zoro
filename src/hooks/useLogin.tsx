import { useReducer, useState, useContext } from 'react';
import { zoroApi } from '../api/zoroApi';
import { AuthContext } from '../Context/AuthContext';
import { RequestLogin } from '../Interfaces/Login';

export interface LoginData {
    email: string;
    password: string;
}

const initialLoginData: LoginData = {
    email: '',
    password: '',
};

type Action = { type: 'handleInputChange', payload: { fieldName: keyof LoginData, value: string } };

const dataReducer = (state: LoginData, action: Action) => {
    switch (action.type) {
        case 'handleInputChange':
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value,
            };
        default:
            return state;
    }
};

export const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [state, dispatch] = useReducer(dataReducer, initialLoginData);
    const [request, setRequest] = useState<RequestLogin | null>(null);
    const { singIn, changeUserName, changeFavImage } = useContext(AuthContext);

    const handleInputChange = (fieldName: keyof LoginData, value: string) => {
        dispatch({ type: 'handleInputChange', payload: { fieldName, value } });
    };

    const handleLogin = async () => {
        setLoading(true);
        const apiUrl = 'http://192.168.1.82:3000/api/zoro/v1/login';

        const dataBody = {
            email: state.email,
            password: state.password,
        };

        try {
            const response = await zoroApi.post<RequestLogin>(apiUrl, dataBody);

            if (response.data) {
                singIn();
                changeUserName(response.data.username); 
                changeFavImage(response.data.image);
                setRequest(response.data);
            } else {
                setRequest(null);
            }
        } catch (error) {
            console.error('No se recibieron los parámetros solicitados:', error);
            setRequest(null);
        } finally {
            setLoading(false);
        }
    };

    return { loading, state, handleLogin, handleInputChange, request };
};
