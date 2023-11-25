import { Route, lazyRouteComponent } from '@tanstack/react-router';

import { publicRoutes } from '../route';

export const indexRoute = new Route({
  getParentRoute: () => publicRoutes,
  path: '/',
  component: lazyRouteComponent(() => import('./page')),
});
