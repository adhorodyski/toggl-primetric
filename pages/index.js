import Head from "next/head";
import { useAtom } from "jotai";
import { useTogglWorkspaces } from "lib/queries";
import { workspaceAtom } from "lib/atoms";

const Page = () => {
  const { data: workspaces } = useTogglWorkspaces();
  const [, setWorkspace] = useAtom(workspaceAtom);

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
    </div>
  );
};

export default Page;
