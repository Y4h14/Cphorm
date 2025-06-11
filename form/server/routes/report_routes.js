import express from "express";
import {
  createReport,
  getAllReport,
  getReport,
  deleteReport,
  updateReport,
} from "../controllers/report_controllers.js";

// const express = require("express");
const reportRouter = express.Router();

reportRouter.post("/", createReport);
reportRouter.get("/", getAllReport);
reportRouter.get("/:id", getReport);
reportRouter.delete("/:id", deleteReport);
reportRouter.put("/:id", updateReport);

export default reportRouter;
