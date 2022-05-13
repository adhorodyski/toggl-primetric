import { togglClient } from "../../../../lib/togglClient";

export default async function handler(req, res) {
  const workspaces = await new Promise((resolve, reject) => {
    togglClient.getWorkspaces((err, workspaces) => {
      if (err) {
        reject(err);
      }

      resolve(workspaces);
    });
  });

  if (!workspaces) {
    res.status(500).json({ msg: "Couldn't get your workspaces" });
  }

  res.status(200).json(workspaces);
}
