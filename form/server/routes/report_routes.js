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

// POST /api/reports/
reportRouter.post("/", async (req, res) => {
  try {
    // You can manipulate req.body here if needed for auto-completion
    const report = await createReport(req.body);
    res.status(201).json({ success: true, data: report });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// GET /api/reports/
reportRouter.get("/", async (req, res) => {
  try {
    const reports = await getAllReport();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/reports/:id
reportRouter.get("/:id", async (req, res) => {
  try {
    const report = await getReport(req.params.id);
    res.status(200).json({ success: true, data: report });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
});

// PUT /api/reports/:id
reportRouter.put("/:id", async (req, res) => {
  try {
    // Manipulate req.body here if needed
    const report = await updateReport(req.params.id, req.body);
    res.status(200).json({ success: true, data: report });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
});

// DELETE /api/reports/:id
reportRouter.delete("/:id", async (req, res) => {
  try {
    const report = await deleteReport(req.params.id);
    res.status(200).json({ success: true, data: report });
  } catch (err) {
    res.status(404).json({ success: false, error: err.message });
  }
});

export default reportRouter;
