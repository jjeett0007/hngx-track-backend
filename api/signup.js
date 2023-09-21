const { signupController } = require("../controller/signupController");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Please fill required input" });
  }

  try {
    const { token, userId } = await signupController(req, res);
    res
      .status(201)
      .json({ message: "User registered successfully", token, userId });
  } catch (error) {
    console.log("Error registering user:", error);
    res
      .status(500)
      .json({ error: "Error registering user again internal server errors" });
  }
};
