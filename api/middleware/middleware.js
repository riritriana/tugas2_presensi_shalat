import jwt from "jsonwebtoken";
import "dotenv/config";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
      return res.status(401).send("invalid");
  }
  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
      next();
  } catch (error) {
      res.status(403).send("Invalid token");
  }
};