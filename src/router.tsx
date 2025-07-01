import {
  createRouter,
  RouterProvider,
  Route,
  RootRoute,
} from "@tanstack/react-router";

import { Home } from "./pages/Home";
import { Layout } from "./components/layout"
import { SellTicket } from "./pages/SellTicket";
import { EventDetail } from "./pages/EventDetail";

const rootRoute = new RootRoute({ component: Layout });

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const sellTicketRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/sell",
  component: SellTicket,
});

const eventDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/event-detail",
  component: EventDetail,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  sellTicketRoute,
  eventDetailRoute,
]);

const router = createRouter({ routeTree });

export const AppRouter = () => <RouterProvider router={router} />;
