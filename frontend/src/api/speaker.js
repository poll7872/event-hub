import { axiosIntance } from "./axiosInstance";

export const createSpeaker = async (speaker) => {
  try {
    const response = await axiosIntance.post("/speaker/createSpeaker", speaker);
    return response.data;
  } catch (error) {
    console.error("Error creating speaker", error);
    throw error;
  }
};
