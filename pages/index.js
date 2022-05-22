import { useState } from "react";
import Head from "next/head";
import { useAtom } from "jotai";
import dayjs from "dayjs";
import { signIn } from "next-auth/react";
import { useTogglWeeklyReport, useTogglWorkspaces } from "lib/queries";
import { workspaceAtom } from "lib/atoms";

const formattedToday = dayjs().format("YYYY-MM-DD");

const Page = () => {
  const { data: workspaces } = useTogglWorkspaces();
  const [workspace, setWorkspace] = useAtom(workspaceAtom);
  const [since, setSince] = useState(formattedToday);

  const { data: report } = useTogglWeeklyReport(
    { workspace_id: workspace?.id, since },
    { enabled: !!workspace && !!since }
  );

  return (
    <div>
      <Head>
        <title>Toggl + Primetric</title>
      </Head>
      <button onClick={() => signIn("primetric")}>
        Sign in with Primetric
      </button>
      <div>
        <h2>Choose your Toggl workspace</h2>
        {workspaces?.map((workspace) => (
          <button key={workspace.id} onClick={() => setWorkspace(workspace)}>
            {workspace.name}
          </button>
        ))}
      </div>
      <div>
        <h3>Your report</h3>
        <input
          type="date"
          value={since}
          onChange={({ target }) => setSince(target.value)}
        />
        {!report?.data.length ? (
          <p>This week is empty</p>
        ) : (
          <pre>{JSON.stringify(report, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};

export default Page;
