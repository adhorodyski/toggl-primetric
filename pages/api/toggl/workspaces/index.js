import { getHeaders } from "lib/toggl";

export default async function handler(req, res) {
  const data = await fetch(`https://api.track.toggl.com/api/v8/workspaces`, {
    headers: getHeaders(),
  });

  const workspaces = await data.json();

  if (!workspaces) {
    res.status(500).json({ msg: "Couldn't get your workspaces" });
  }

  res.status(200).json(workspaces);
}
