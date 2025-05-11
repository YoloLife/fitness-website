import { lazy, type ReactNode, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { userRoutes } from "./user-routes";

export const SuspenseWrapper = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<div className="p-4">Loading...</div>}>{children}</Suspense>;
};

// Wrap each user route element with SuspenseWrapper
const wrappedUserRoutes = userRoutes.map(route => ({
  ...route,
  element: <SuspenseWrapper>{route.element}</SuspenseWrapper>
}));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const SomethingWentWrongPage = lazy(
  () => import("./pages/SomethingWentWrongPage"),
);

// Determine the basename based on the environment
// This ensures the router works on GitHub Pages
const getBasename = () => {
  // Use the same base as defined in vite.config.ts
  return process.env.NODE_ENV === 'production' ? '/fitness-website/' : '/';
};

export const router = createBrowserRouter(
  [
    ...wrappedUserRoutes,
    {
      path: "*",
      element: (
        <SuspenseWrapper>
          <NotFoundPage />
        </SuspenseWrapper>
      ),
      errorElement: (
        <SuspenseWrapper>
          <SomethingWentWrongPage />
        </SuspenseWrapper>
      ),
    },
  ],
  {
    basename: getBasename()
  }
);