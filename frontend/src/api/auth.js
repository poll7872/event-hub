import { axiosIntance } from "./axiosInstance";

export const register = async (user) => {
  try {
    const response = await axiosIntance.post("/auth/register", user);
    return response.data;
  } catch (error) {
    console.error("Error registering user", error);
    throw error;
  }
};

export const login = async (user) => {
  try {
    const response = await axiosIntance.post("/auth/login", user);
    return response.data;
  } catch (error) {
    console.error("Error logging user", error);
    throw error;
  }
};
