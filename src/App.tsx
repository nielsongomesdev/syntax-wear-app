import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./router/-route-tree";
import { CartProvider } from "./contexts/CartContext/CartProvider";
import { AuthProvider } from "./contexts/AuthContext/AuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <AuthProvider>  
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
      
  );
}

export default App;
