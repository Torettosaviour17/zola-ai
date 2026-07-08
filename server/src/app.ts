import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Welcome to ZolaAI API 🚀",
  });
});

export default app;
