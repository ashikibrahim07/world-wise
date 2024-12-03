// api/cities.js
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const dataPath = path.join(process.cwd(), "data", "cities.json");
    const data = await fs.readFile(dataPath, "utf-8");
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error("Error loading data:", error);
    res.status(500).json({ error: "Failed to load data" });
  }
}
