import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateTripPages } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";

// Definindo rotas com react routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPages />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);


export function App() {
  return <RouterProvider router={router} />
}

