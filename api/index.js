import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import studentRoute from "./routes/students-route.js";
import registerRoute from "./routes/register-route.js";

const app = express();
app.use(cors({ origin: "http://localhost:5432" }));
app.use(express.json());
app.use(cookieParser());

app.use("/student", studentRoute);
app.use("/register", registerRoute);

app.listen(3000, () => console.log("Server berhasil dijalankan."));



// import express from "express";
// import cors from "cors";
// import { pool } from "../db.js";
// import  argon2  from "argon2";
// import jwt from "jsonwebtoken";
// import cookieParser from "cookie-parser";

// import studentRoute from "./routes/students-route.js";
// import registerRoute from "./routes/register-route.js";
// import { verifyToken } from "./middleware/middleware.js";

// const app = express();
// app.use(
//   cors({
//     origin: "localhost:5173",
//   })
// );
// app.use(express.json());
// app.use(cookieParser());

// app.use("/student",studentRoute);
// app.use("/register", registerRoute);

// app.listen(3000, () => console.log("Server berhasil dijalankan."));
// // // anscripsi, hash