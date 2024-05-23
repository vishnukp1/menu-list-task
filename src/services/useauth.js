import { useState, useEffect, useRef } from "react";
import axios from "../axios";

// useLogin Hook
export const useLogin = () => {
  const formRef = useRef(null);

  const handleSubmit = async (email, password) => {
    const data = {
      email,
      password,
    };

    try {
      const response = await axios.post("/api/login", data);
      localStorage.setItem("token", response.data.access_token);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return { formRef, handleSubmit };
};

// useRegister Hook
export const useRegister = () => {
    const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const handleSubmit = async (email, username, password) => {
    const data = {
      email,
      username,
      password,
    };

    try {
      const response = await axios.post("/api/register", data);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
      setErrors(error.response.data.errors);
    }
  };

  return { formRef, handleSubmit ,errors};
};


// useProfile Hook
export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found.");

        return;
      }

      try {
        const response = await axios.get("/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response.data);
        console.log("response", response.data);
      } catch (error) {
        console.error(error.response.data);
        setError(error.response.data);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async (firstName, lastName, gender, address) => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found.");
      return;
    }

    const updateData = {
      firstName,
      lastName,
      gender,
      address,
    };

    try {
      const response = await axios.put("/api/profile", updateData, {
        headers: {
          Authorization: token,
        },
      });
      setProfile(response.data);

      console.log("Profile updated", response.data);
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data);
    }
  };

  return { error, profile, formRef, handleUpdate };
};
