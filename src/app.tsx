// Importa funções de roteamento do React Router DOM
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importa componentes de páginas (provavelmente estão em arquivos separados)
import { CreateTripPages } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";

// Definição de rotas usando createBrowserRouter
const router = createBrowserRouter([
  // Rota raiz (/)
  {
    path: "/",
    element: <CreateTripPages />, // Renderiza o componente CreateTripPages na raiz
  },
  // Rota para detalhes de viagem (/trips/:tripId)
  {
    path: "/trips/:tripId", // O ":tripId" é um parâmetro dinâmico
    element: <TripDetailsPage />, // Renderiza o componente TripDetailsPage para detalhes de viagem
  },
]);

// Função App (componente principal da aplicação)
export function App() {
  // Renderiza o RouterProvider passando o roteador configurado anteriormente
  return <RouterProvider router={router} />;
}


