// useRegister.js
import { useRef } from 'react';
import axios from '../axois';

const useRegister = () => {
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);

        const data = {
            email: formData.get('email'),
            username: formData.get('username'),
            password: formData.get('password')
        };

        try {
            const response = await axios.post('/api/register', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return { formRef, handleSubmit };
};

export default useRegister;