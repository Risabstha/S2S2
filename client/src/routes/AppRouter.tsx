import { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ScrollToTop from "../utils/ScrollToTop";
import MainHome from "../pages/MainHome";
import AboutUs from "../pages/client/AboutUs";
import AmateurRadio from "../pages/client/AmateurRadio";




// resetErrorBoundry
  function ErrorFallback({
    error,
    resetErrorBoundary,
  }: {
    error: unknown;
    resetErrorBoundary: () => void;
  }) {
    return (
      <div className="pt-16">
        <div className="max-w-md mx-auto  p-6  rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-400 mb-4">
            Oops! Something went wrong.
          </h2>
          <p className="text-xl font-bold text-gray-400 mb-4">
            {error instanceof Error ? error.message : String(error)}
          </p>
          <button
            onClick={() => {
              resetErrorBoundary();
              window.location.reload();
            }}
            className="px-4 py-2 bg-gray-600 font-semibold text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
const AppRouter = () => {


  // Wrapper to reduce repetition for admin routes
  const RouteWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      // <ProtectedRoute>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </ErrorBoundary>
      // </ProtectedRoute>
    );
  };

  // Root layout component that includes ScrollToTop
  const RootLayout = () => {
    return (
      <>
        <ScrollToTop />
        <Outlet />
      </>
    );
  };

  const routes = createBrowserRouter([
    {
      element: <RootLayout />,
      errorElement: <div>Not Found</div>,
      children: [
        {
          path: "/",
          element: (
            <RouteWrapper>
              <MainHome />
            </RouteWrapper>
          ),
        },
        {
          path: "/aboutus",
          element: (
            <RouteWrapper>
              <AboutUs />
            </RouteWrapper>
          ),
        },
        {
          path: "/amateur-radio",
          element: (
            <RouteWrapper>
              <AmateurRadio />
            </RouteWrapper>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default AppRouter;
