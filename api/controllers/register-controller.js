import {pool} from "../../db.js"
import argon2 from "argon2";
import jwt from "jsonwebtoken";

// register
export async function register(req,res){
      try {
      const hash = await argon2.hash(req.body.password);
      console.log(hash);
      const result = await pool.query(
        "INSERT INTO users (username,password) VALUES ($1, $2) RETURNING *",
        [req.body.username, hash]
      );
        res.send("pendaftaran berhasil")    
    } catch (error) {
      console.log(error);
    }
  }
// login
export async function login(req, res) {
  const { username, password } = req.body;
  try {
      const user = await pool.query(`SELECT * FROM users WHERE username = '${username}'`);
      // console.log(user);
      if (user.rows.length === 0) {

          return res.status(404).send("User tidak ditemukan");
      }
      const passwordMatch = await argon2.verify(user.rows[0].password, password);
      if (!passwordMatch) {
          return res.status(401).send("Password Tidak Valid");
      }
      const token = jwt.sign({ userId: user.rows[0]._id }, process.env.JWT_SECRET);
      console.log(token);
      res.cookie('token', token, { httpOnly: true });
      return res.status(200).json({
          message: "Login Berhasil",
          token: token
      });
  } catch (error) {
      return res.status(500).send(error.message);
  }
}