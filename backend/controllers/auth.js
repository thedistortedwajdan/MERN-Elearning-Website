import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = (req, res) => {
  try {
    const { username, password, role, age } = req.body;

    // Validate role
    if (role !== "instructor" && role !== "student") {
      return res.status(400).json("Invalid role specified");
    }

    // Check if user already exists in users table
    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [username], (err, data) => {
      if (err) return res.json(err);
      if (data.length) return res.status(409).json("User already exists");

      // Hash the password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);

      // Insert into users table
      const insertUserQuery =
        "INSERT INTO users(`username`, `password`, `role`) VALUES (?, ?, ?)";
      db.query(insertUserQuery, [username, hash, role], (err, userData) => {
        if (err) return res.status(500).json("Error creating account");

        // If role is student, insert into students table
        if (role === "student") {
          const insertStudentQuery =
            "INSERT INTO students(`userId`, `age`) VALUES (?, ?)";
          db.query(insertStudentQuery, [userData.id, age], (err) => {
            if (err)
              return res.status(500).json("Error creating student record");
            return res.status(200).json("Student account created successfully");
          });
        } else {
          return res
            .status(200)
            .json("Instructor account created successfully");
        }
      });
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Server error");
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists in the users table
    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [username], (err, data) => {
      if (err) return res.status(500).json("Database error");
      if (!data.length) return res.status(404).json("Account does not exist");

      // Check if the password is correct
      const isPasswordCorrect = bcrypt.compareSync(password, data[0].password);
      if (!isPasswordCorrect) {
        return res.status(400).json("Incorrect username or password");
      }

      // Create JWT token
      const token = jwt.sign({ id: data[0].id, role: data[0].role }, "jwtkey");

      // Exclude password from the response data
      const { password: _, ...other } = data[0];

      // Set cookie with the token and return user data
      res
        .cookie("token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Server error");
  }
};

export const logout = (req, res) => {
  try {
    res
      .clearCookie("token", {
        httpOnly: true, // Adds security against client-side scripts
        sameSite: "none", // Required for cross-origin cookies in some environments
      })
      .status(200)
      .json("Logged out successfully");
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Logout failed");
  }
};
