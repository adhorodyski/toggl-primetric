import { togglClient } from "lib/togglClient";

export default function handler(req, res) {
  const report = togglClient.weeklyReport();

  res.status(200).json(report);
}
