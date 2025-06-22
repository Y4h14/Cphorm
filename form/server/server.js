import dotenv from "dotenv";
import express from "express";
import reportRoutes from "./routes/report_routes.js";

dotenv.config();

// creating an express APP
const app = express();
app.use(express.json());

app.get("/z", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/reports/", reportRoutes);

// running the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
