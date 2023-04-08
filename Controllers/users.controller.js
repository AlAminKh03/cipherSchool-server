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

exports.getUser = async (req, res) => {
  const email = req.params.email;

  try {
    const user = await UserModel.findOne({ email: email });

    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBasicInfo = async (req, res) => {
  const email = req.params.email;
  const filter = { email: email };
  const updatedBody = req.body;

  try {
    const updateInfo = await UserModel.updateMany(filter, updatedBody);

    res.status(202).send(updateInfo);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getbio = async (req, res) => {
  const email = req.params.email;
  const filter = { email: email };

  try {
    const Bio = await UserModel.find(filter, { bio: 1 });
    res.status(201).send(Bio);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatebio = async (req, res) => {
  const email = req.params.email;
  const filter = { email: email };
  const updatedBio = req.body;

  try {
    const Bio = await UserModel.updateOne(filter, updatedBio);
    res.status(201).send(Bio);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSocial = async (req, res) => {
  const email = req.params.email;
  const filter = { email: email };
  try {
    const Social = await UserModel.findOne(filter);
    res.status(201).send(Social);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateSocial = async (req, res) => {
  const email = req.params.email;
  const filter = { email: email };
  const updatedSocial = req.body;
  console.log(updatedSocial);

  try {
    const Social = await UserModel.updateOne(filter, updatedSocial);
    console.log(Social);
    res.status(201).send(Social);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getInfo = async (req, res) => {
  const email = req.params.email;
  const filter = { email: email };
  try {
    const Info = await UserModel.findOne(filter);
    res.status(201).send(Info);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateInfo = async (req, res) => {
  const email = req.params.email;
  const filter = { email: email };
  const updatedInfo = req.body;
  console.log(updatedInfo);

  try {
    const Social = await UserModel.updateOne(filter, updatedInfo);
    console.log(updatedInfo);
    res.status(201).send(updatedInfo);
  } catch (error) {
    res.status(500).send(error);
  }
};
