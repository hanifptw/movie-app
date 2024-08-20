"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <h1>hehe</h1>
      {children}
    </QueryClientProvider>
  );
};

export default Provider;
