import ToggleClient from "toggl-api";

const togglClient = new ToggleClient({
  apiToken: process.env.NEXT_PUBLIC_TOGGL_API_TOKEN,
});

export default function handler(req, res) {
  togglClient.startTimeEntry(
    {
      description: "Some cool work",
      billable: true,
    },
    (err, timeEntry) => {
      // working now exactly 20 seconds
      setTimeout(function () {
        toggl.stopTimeEntry(timeEntry.id, function (err) {
          // handle error

          toggl.updateTimeEntry(
            timeEntry.id,
            { tags: ["finished"] },
            function (err) {
              toggl.destroy();
            }
          );
        });
      }, 20_000);
    }
  );

  res.status(200).json({ name: "John Doe" });
}
