const { connectToDatabase } = require("../lib/dbConnect");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signupUser(req, res) {
  try {
    const { db } = await connectToDatabase();
    const usersCollection = db.collection("users"); // Replace with your actual collection name

    const { email, password } = req.body;

    // Check if the user with the same email already exists
    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = {
      email,
      password: hashedPassword,
    };

    // Insert the new user into the database
    const result = await usersCollection.insertOne(newUser);

    // Generate a JWT token with the user's ID
    const token = jwt.sign(
      { userId: result.insertedId },
      "YourSecretKeyHere", // Replace with your actual secret key
      {
        expiresIn: "1h", // Set the expiration time as per your requirements
      }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      userId: result.insertedId,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ error: "Error registering user, internal server error" });
  }
}

module.exports = { signupUser };
