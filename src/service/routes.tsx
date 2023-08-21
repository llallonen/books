import { createBrowserRouter } from "react-router-dom";
import BooksListPage from "../page/BooksListPage";
import BookPage from "../page/BookPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BooksListPage />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BooksListPage /> },
      { path: "/:book", element: <BookPage /> },
    ],
  },
]);
