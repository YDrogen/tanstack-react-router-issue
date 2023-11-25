import { Outlet } from '@tanstack/react-router';

export default function PublicLayout() {
  return (
    <>
      This is public layout
      <Outlet />
    </>
  );
}
