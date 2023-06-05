import { ReactElement } from "react";
import { Container } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";

const App = (): ReactElement => {
  const client = new QueryClient();

  return (
    <Container>
      <QueryClientProvider client={client}>
        <Outlet />
      </QueryClientProvider>
    </Container>
  );
};

export default App;
