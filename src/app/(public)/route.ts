import { Route, lazyRouteComponent } from '@tanstack/react-router';

import { rootRoute } from '@/router';

import { indexRoute } from './index/route';

const publicRoutes = new Route({
  getParentRoute: () => rootRoute,
  id: 'public',
  component: lazyRouteComponent(() => import('./layout')),
});

publicRoutes.addChildren([indexRoute]);

export { publicRoutes };
