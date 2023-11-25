import { Route, lazyRouteComponent } from '@tanstack/react-router';

import { protectedRoutes } from '../route';

export const settingsRoute = new Route({
  getParentRoute: () => protectedRoutes,
  path: '/settings',
  component: lazyRouteComponent(() => import('./page')),
});
