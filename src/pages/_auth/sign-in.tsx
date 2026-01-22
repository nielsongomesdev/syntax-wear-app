import { LoginForm }  from "@/components/LoginForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <h1>Rota de Login</h1>
      <LoginForm />
    </section>
  );
}
