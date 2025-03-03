import { axiosIntance } from "./axiosInstance";

export const createEvent = async (event) => {
  try {
    const response = await axiosIntance.post("/event/createEvent", event);
    return response.data;
  } catch (error) {
    console.error("Error creating event", error);
    throw error;
  }
};
