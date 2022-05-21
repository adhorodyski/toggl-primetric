import { getHeaders } from "lib/toggl";

export default async function handler(req, res) {
  const user_agent = "lukasz.chludzinski@gmail.com";
  const workspace_id = 4966870;
  const since = "2022-05-10";

  const data = await fetch(
    `https://api.track.toggl.com/reports/api/v2/weekly?user_agent=${user_agent}&workspace_id=${workspace_id}&since=${since}`,
    { headers: getHeaders() }
  );

  const report = await data.json();

  if (!report) {
    res.status(500).json({ msg: "Couldn't get your weekly reports" });
  }

  res.status(200).json(report);
}
