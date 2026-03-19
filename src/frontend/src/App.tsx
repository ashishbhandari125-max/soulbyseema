import AmbientSound from "@/components/AmbientSound";
import AuraWidget from "@/components/AuraWidget";
import CursorParticles from "@/components/CursorParticles";
import OmLoader from "@/components/OmLoader";
import { Toaster } from "@/components/ui/sonner";
import Admin from "@/pages/Admin";
import Home from "@/pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { useState } from "react";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: Admin,
});

const routeTree = rootRoute.addChildren([indexRoute, adminRoute]);
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <CursorParticles />
      {loading && <OmLoader onDone={() => setLoading(false)} />}
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
      <AmbientSound />
      <AuraWidget />
    </QueryClientProvider>
  );
}
