// api/cities.js
import { promises as fs } from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "data", "cities.json");

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await fs.readFile(dataPath, "utf-8");
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      console.error("Error loading data:", error);
      res.status(500).json({ error: "Failed to load data" });
    }
  } else if (req.method === "POST") {
    try {
      // Read current data
      const data = JSON.parse(await fs.readFile(dataPath, "utf-8"));

      // Create new city from request body
      const newCity = req.body;
      if (!newCity || !newCity.id || !newCity.name) {
        return res.status(400).json({ error: "Invalid city data" });
      }

      // Add the new city to the data
      data.push(newCity);

      // Write updated data back to the file
      await fs.writeFile(dataPath, JSON.stringify(data, null, 2), "utf-8");

      res.status(201).json(newCity);
    } catch (error) {
      console.error("Error creating city:", error);
      res.status(500).json({ error: "Failed to create city" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
