import { createBrowserRouter } from "react-router-dom";
import BookPage from "../page/BookPage";
import BooksListPage from "../page/BooksListPage";
import Layout from "../page/Layout";
import ErrorPage from "../page/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BooksListPage /> },
      { path: "/:bookId", element: <BookPage /> },
    ],
  },
]);
