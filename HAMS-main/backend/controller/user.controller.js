import User from "../modules/user.module.js";

export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userexist = await User.findOne({$and:[

        {email},{password}
    ]
    });

    if (!userexist) {
      return res.status(404).json({ message: "User not found" });
    }


      res.status(200).json({ message: "Login Success" });
   
  } catch (error) {
    console.log("Error in login user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const registeruser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const ifexistuser = await User.findOne({
      $or: [{ name }, { email }]
    });

    if (ifexistuser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const createuser = await User.create({
      name,
      email,
      password
    });

    if (createuser) {
      res.status(201).json({ message: "User Registered Successfully" });
    } else {
      res.status(500).json({ message: "User creation failed" });
    }
  } catch (error) {
    console.log("Error in register user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
