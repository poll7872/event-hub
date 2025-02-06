import { Speaker } from "../models/Speaker.js";

//Metodo para crear los speakers (solo user con role: admin)
export const createSpeaker = async (req, res) => {
  const { firstname, lastname, bio, expertise } = req.body;

  try {
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "You are not allowed to create speaker" });
    }

    const newSpeaker = new Speaker({
      firstname,
      lastname,
      bio,
      expertise,
    });

    await newSpeaker.save();
    res.status(201).json(newSpeaker);
  } catch (error) {
    res.status(500).json({
      message: "Error creating speaker",
      error: error.message,
    });
  }
};

//Método obtener todos los speakers
export const getAllSpeakers = async (req, res) => {
  try {
    const speakers = await Speaker.find();
    res.status(200).json(speakers);
  } catch (error) {
    res.status(500).json({
      message: "Error getting speakers",
      error: error.message,
    });
  }
};

//Método para actualizr un speaker
export const updateSpeaker = async (req, res) => {
  const id = req.params.id;
  const { firstname, lastname, bio, expertise } = req.body;

  try {
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "You are not allowed to update speaker" });
    }

    const updatedSpeaker = await Speaker.findByIdAndUpdate(
      id,
      {
        firstname,
        lastname,
        bio,
        expertise,
      },
      { new: true },
    );

    if (!updateSpeaker)
      return res.status(404).json({ message: "Speaker Not Found" });

    res.status(200).json(updatedSpeaker);
  } catch (error) {
    res.status(500).json({
      message: "Error updating speaker",
      error: error.message,
    });
  }
};

//Método para eliminar un speaker
export const deleteSpeaker = async (req, res) => {
  const id = req.params.id;

  try {
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "You are not allowed to delete speaker" });
    }

    const deletedSpeaker = await Speaker.findByIdAndDelete(id);

    if (!deletedSpeaker)
      return res.status(404).json({ message: "Speaker Not Found" });

    res.status(200).json({ message: "Speaker successfully delete" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting speaker",
      error: error.message,
    });
  }
};
