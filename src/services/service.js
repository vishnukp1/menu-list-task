import { useState, useEffect, useRef } from 'react';
import axios from '../axois';

const useProfile = () => {
    const [profile, setProfile] = useState(null);
    const formRef = useRef(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error("No token found.");
                return;
            }

            try {
                const response = await axios.get('/api/profile', {
                    headers: {
                        Authorization: token
                    }
                });
                setProfile(response.data);
                console.log("response", response.data);
            } catch (error) {
                console.error(error.response.data);
            }
        };

        fetchProfile();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            console.error("No token found.");
            return;
        }

        const formData = new FormData(formRef.current);
        const updateData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            gender: formData.get('gender'),
            address: formData.get('address'),
        };

        try {
            const response = await axios.put('/api/profile', updateData, {
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json'
                }
            });
            setProfile(response.data);
            console.log("Profile updated", response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return { profile, formRef, handleUpdate };
};

export default useProfile;



