import { Outlet } from '@tanstack/react-router';

export default function ProtectedLayout() {
  return (
    <>
      This is protected layout
      <Outlet />
    </>
  );
}
