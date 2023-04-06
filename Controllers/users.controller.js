const UserModel = require("../Models/users.model");
const bcrypt = require("bcrypt");

exports.postUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.postLogedInUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (!existingUser) {
      return res
        .status(400)
        .send({ message: "User not found , Please Sign Up" });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).send({ message: "Wrong Password" });
    }
    res.status(200).send(existingUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
