import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const dataPath = path.join(process.cwd(), "public", "cites.json");
      const data = await fs.readFile(dataPath, "utf-8");
      const jsonData = JSON.parse(data);

      // Return the cities array
      res.status(200).json(jsonData.cities);
    } catch (error) {
      console.error("Error loading data:", error);
      res.status(500).json({ error: "Failed to load data" });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
