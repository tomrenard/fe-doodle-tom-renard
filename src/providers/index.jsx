import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

export const ReactQueryProvider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
