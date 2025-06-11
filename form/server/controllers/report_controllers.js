import { Report } from "../models/report_model";

// create a new report
export const createReport = async (reportData) => {
  const report = new Report(reportData);
  await report.save();
  return report;
};

// Get all Reports
export const getAllReport = async () => {
  const reports = await Report.find();
  return reports;
};

// Get a Report by ID
export const getReport = async (id) => {
  const report = await Report.findById(id);
  if (!report) {
    throw new Error("Report not found");
  }
  return report;
};

// Update a report by ID
export const updateReport = async (id, updateData) => {
  const report = await Report.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  if (!report) {
    throw new Error("Report not found");
  }
  return report;
};

// delete report
export const deleteReport = async (id) => {
  const report = await Report.findByIdAndDelete(id);
  if (!report) {
    throw new Error("Report not found");
  }
  return report;
};
