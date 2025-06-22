import { supabase } from "../models/supabase_client.js";

// create a new report
export const createReport = async (reportData) => {
  const { data, error } = await supabase
    .from("reports")
    .insert([reportData])
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data;
};

// Get all Reports
export const getAllReport = async () => {
  const { data, error } = await supabase.from("reports").select("*");
  if (error) throw new Error(error.message);
  return data;
};

// Get a Report by ID
export const getReport = async (id) => {
  const { data, error } = await supabase
    .from("reports")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Report not found");
  return data;
};

// Update a report by ID
export const updateReport = async (id, updateData) => {
  const { data, error } = await supabase
    .from("reports")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Report not found");
  return data;
};

// delete report
export const deleteReport = async (id) => {
  const { data, error } = await supabase
    .from("reports")
    .delete()
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  if (!data) throw new Error("Report not found");
  return data;
};
