import { Report } from "../models/report_model";

// create a new report
export const createReport = async (req, res) => {
  try {
    const report = new Report(req.body);
    console.log(req.body);

    await report.save();
    res.status(201).json({ success: true, data: report });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get all Reports
export const getAllReport = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a  Report by ID
export const getReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);
    if (!report) {
      return res
        .status(404)
        .json({ success: false, error: "Report not found" });
    }
    res.status(201).json({ success: true, data: report });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update a report by ID
export const updateReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!report) {
      return res
        .status(404)
        .json({ success: false, error: "Report not found" });
    }
    // res.status(201).json({success: true, data: report})
    res.status(201).json({ success: true, id: report._id });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// delete report
export const deleteReport = async (req, res) => {
  const report = await Report.findByIdAndDelete(req.params.id);
  try {
    if (!report) {
      return res
        .status(404)
        .json({ success: false, error: "Report not found" });
    }
    res.status(201).json({ success: true, data: report });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};
