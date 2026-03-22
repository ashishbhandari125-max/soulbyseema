import AmbientSound from "@/components/AmbientSound";
import AuraWidget from "@/components/AuraWidget";
import CursorParticles from "@/components/CursorParticles";
import OmLoader from "@/components/OmLoader";
import { Toaster } from "@/components/ui/sonner";
import Admin from "@/pages/Admin";
import Brochure from "@/pages/Brochure";
import Home from "@/pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createHashHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { useState } from "react";

const queryClient = new QueryClient();

const hashHistory = createHashHistory();

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

const brochureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/brochure",
  component: Brochure,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  adminRoute,
  brochureRoute,
]);
const router = createRouter({ routeTree, history: hashHistory });

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
