import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Definindo rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/test",
    element: <div>Hello test!</div>,
  },
]);


export function App() {
  return <RouterProvider router={router} />
}

