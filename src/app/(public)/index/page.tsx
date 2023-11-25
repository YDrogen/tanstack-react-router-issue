import { Link } from '@tanstack/react-router';

import { dashboardRoute } from '@/app/(protected)/dashboard/route';

export default function Page() {
  return (
    <>
      <h1>Index</h1>
      <p>This is a public page.</p>

      <Link to={dashboardRoute.to}>Go to Dashboard</Link>
    </>
  );
}
