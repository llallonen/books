import { createBrowserRouter } from "react-router-dom";
import BookListPage from "../pages/BookListPage";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BookListPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BookListPage /> },
      // { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
]);
