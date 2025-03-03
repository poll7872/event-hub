import { axiosIntance } from "./axiosInstance";

export const createSpeaker = async (speaker, token) => {
  try {
    const config = {
      headers: {
        Authorization: token,
      },
    };
    const response = await axiosIntance.post(
      "/speaker/createSpeaker",
      speaker,
      config,
    );
    return response.data;
  } catch (error) {
    console.error("Error creating speaker", error);
    throw error;
  }
};
