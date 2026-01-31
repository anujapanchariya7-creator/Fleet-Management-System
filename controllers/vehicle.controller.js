import { supabase } from "../config/supabase.js";

export const addVehicle = async (req, res) => {
  try {
    const { owner_id, name, registration_number, allowed_passengers, rate_per_km } = req.body;

    const { data: owner } = await supabase
      .from("users")
      .select("role")
      .eq("id", owner_id)
      .single();

    if (owner.role !== "owner") {
      return res.status(403).json({ message: "Only owners can add vehicles" });
    }

    await supabase.from("vehicles").insert([
      { name, registration_number, allowed_passengers, rate_per_km, owner_id }
    ]);

    res.status(201).json({ message: "Vehicle added" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const assignDriver = async (req, res) => {
  try {
    const { driver_id } = req.body;
    const { vehicleId } = req.params;

    const { data: driver } = await supabase
      .from("users")
      .select("role")
      .eq("id", driver_id)
      .single();

    if (driver.role !== "driver") {
      return res.status(400).json({ message: "Invalid driver" });
    }

    await supabase
      .from("vehicles")
      .update({ driver_id })
      .eq("id", vehicleId);

    res.json({ message: "Driver assigned" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getVehicle = async (req, res) => {
  const { vehicleId } = req.params;
  const { data } = await supabase.from("vehicles").select("*").eq("id", vehicleId);
  res.json(data);
};