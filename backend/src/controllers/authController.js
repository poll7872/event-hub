import { User } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { firstname, lastname, email, password, role } = req.body;

  try {
    //Comprobr si el usuario existe
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    //Encriptar password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Crear User
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await newUser.save();
    res.status(201).json({
      message: "User successfully registered",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //Validar credenciales correo y contraseña
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Incorrect credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect credentials" });

    //General el token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "4h" },
    );

    res.status(200).json({ token: token, userId: user._id, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
