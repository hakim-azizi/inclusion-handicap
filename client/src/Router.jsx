import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import AccessibilityAtWork from "./pages/AccessibilityAtWork";
import AwarenessTraining from "./pages/AwarenessTraining";
import EqualOpportunities from "./pages/EqualOpportunities";
import SupportResources from "./pages/SupportResources";
import Handicap from "./pages/Handicap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "handicap",
        element: <Handicap />,
      },
      {
        path: "accessibilite-au-travail",
        element: <AccessibilityAtWork />,
      },
      {
        path: "formation-et-sensibilisation",
        element: <AwarenessTraining />,
      },
      {
        path: "egalite-des-chances",
        element: <EqualOpportunities />,
      },
      {
        path: "soutien-et-ressources",
        element: <SupportResources />,
      },
    ],
  },
]);

export default router;
