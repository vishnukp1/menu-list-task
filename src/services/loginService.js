// useLogin.js
import { useRef } from 'react';
import axios from '../axois';

const useLogin = () => {
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);

        const data = {
            email: formData.get('email'),
            password: formData.get('password')
        };

        try {
            const response = await axios.post('/api/login', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return { formRef, handleSubmit };
};

export default useLogin;
