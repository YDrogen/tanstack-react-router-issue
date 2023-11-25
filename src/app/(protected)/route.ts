import { Route, lazyRouteComponent } from '@tanstack/react-router';

import { rootRoute } from '@/router';

import { dashboardRoute } from './dashboard/route';
import { settingsRoute } from './settings/route';

const protectedRoutes = new Route({
  getParentRoute: () => rootRoute,
  id: 'protected',
  component: lazyRouteComponent(() => import('./layout')),
});

protectedRoutes.addChildren([dashboardRoute, settingsRoute]);

export { protectedRoutes };
