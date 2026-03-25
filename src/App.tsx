import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./router/-route-tree";
import { CartProvider } from "./contexts/CartContext/CartProvider";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
      <AuthProvider>  
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
  );
}

export default App;
