import { Outlet, Router, rootRouteWithContext } from '@tanstack/react-router';

import { protectedRoutes } from './app/(protected)/route';
import { publicRoutes } from './app/(public)/route';

export interface AppRouterContext {
  isAuthenticated?: boolean;
}

export const rootRoute = rootRouteWithContext<AppRouterContext>()({
  component: () => (
    <>
      <Outlet />
    </>
  ),
});

const routeTree = rootRoute.addChildren([publicRoutes, protectedRoutes]);

const router = new Router({
  routeTree,
  context: {},
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default router;
