const { UserModel } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (user) => {
  try {
    //finde user
    const dbUser = await UserModel.findOne({ user_name: user.user_name });
    //check if exsist
    if (!dbUser) throw new Error("user not found");
    //checked password
    if (!(await bcrypt.compare(dbUser.password, user.password))) {
      throw new Error("worning password");
    }
    //create toke with id name and role
    const token = await jwt.sign(
      {
        user_name: dbUser.user_name,
        role: dbUser.role,
        id: dbUser.id,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "3m" }
    );
    //returen token
    return token;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  login
}

