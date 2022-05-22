import { QueryClientProvider } from "react-query";
import { queryClient } from "lib/queryClient";

const App = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
);

export default App;
