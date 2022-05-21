import Head from "next/head";
import { useAtom } from "jotai";
import { useTogglWeeklyReport, useTogglWorkspaces } from "lib/queries";
import { workspaceAtom } from "lib/atoms";

const Page = () => {
  const { data: workspaces } = useTogglWorkspaces();
  const [workspace, setWorkspace] = useAtom(workspaceAtom);

  const { data: report } = useTogglWeeklyReport(
    { workspace_id: workspace?.id, since: "2022-05-10" },
    { enabled: !!workspace }
  );

  return (
    <div>
      <Head>
        <title>Toggl + Primetric</title>
      </Head>
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
        <pre>{JSON.stringify(report, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Page;
