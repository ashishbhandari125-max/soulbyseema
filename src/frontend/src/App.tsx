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
  useRouterState,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const hashHistory = createHashHistory();

function TitleUpdater() {
  const location = useRouterState({ select: (s) => s.location });
  useEffect(() => {
    const path = location.pathname;
    if (path === "/admin") {
      document.title = "Admin Panel | Soul by Seema";
    } else if (path === "/brochure") {
      document.title = "Brochure | Soul by Seema";
    } else {
      document.title = "Soul by Seema | Spiritual Healer & Wellness Coach";
    }
  }, [location.pathname]);
  return null;
}

const rootRoute = createRootRoute({
  component: () => (
    <>
      <TitleUpdater />
      <Outlet />
    </>
  ),
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
