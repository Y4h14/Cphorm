import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import reportRoutes from "./routes/report_routes.js";

dotenv.config();

// creating an express APP
const app = express();
app.use(express.json());

// Connecting to MONGODB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.log(err.message));

app.use("/api/reports/", reportRoutes);

// running the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
