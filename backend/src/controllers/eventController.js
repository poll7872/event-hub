import { Event } from "../models/Event.js";

//Método para crear un evento (solo user con rol: admin)
export const createEvent = async (req, res) => {
  const { title, description, date, location, speakers } = req.body;

  try {
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "You are not allowed to create events" });
    }

    const newEvent = new Event({
      title,
      description,
      date,
      location,
      createdBy: req.user.userId,
      speakers,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({
      message: "Error created event",
      error: error.message,
    });
  }
};

//Método para obtener todos los eventos
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .populate("createdBy", "firstname lastname email")
      .populate("speakers", "firstname lastname expertise");

    res.status(200).json(events);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error getting events", error: error.message });
  }
};

//Método para actualizar un evento
export const updateEvent = async (req, res) => {
  const id = req.params.id;
  const { title, description, date, location, speakers } = req.body;

  try {
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "You are not allowed to update events" });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      {
        title,
        description,
        date,
        location,
        speakers,
      },
      {
        new: true,
      },
    );

    if (!updatedEvent)
      return res.status(404).json({ message: "Event Not Found" });

    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({
      message: "Error updating event",
      error: error.message,
    });
  }
};

export const deleteEvent = async (req, res) => {
  const id = req.params.id;
  try {
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "You are not allowed to delete events" });
    }

    const deleteEvent = await Event.findByIdAndDelete(id);

    if (!deleteEvent)
      return res.status(404).json({ message: "Event Not Found" });

    res.status(200).json({ message: "Event successfully delete" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting event",
      error: error.message,
    });
  }
};
