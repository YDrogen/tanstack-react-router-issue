import { Route, lazyRouteComponent } from '@tanstack/react-router';

import { protectedRoutes } from '../route';

export const dashboardRoute = new Route({
  getParentRoute: () => protectedRoutes,
  path: '/dashboard',
  component: lazyRouteComponent(() => import('./page')),
});
