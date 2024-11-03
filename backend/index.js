import express from "express";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);

app.listen(4000, () => {
  console.log("server started");
});
