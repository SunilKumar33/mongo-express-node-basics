import express, { Application } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import userRoutes from "./routes/userRoutes";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", userRoutes);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
