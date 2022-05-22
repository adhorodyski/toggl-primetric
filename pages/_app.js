import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "lib/queryClient";

const App = ({ Component, pageProps: { session, ...props } }) => (
  <SessionProvider session={session}>
    <QueryClientProvider client={queryClient}>
      <Component {...props} />
    </QueryClientProvider>
  </SessionProvider>
);

export default App;
