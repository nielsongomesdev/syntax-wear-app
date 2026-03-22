import { Link } from "@tanstack/react-router";

export const Logo = () => {
  return (
    <Link to="/" className="self-center">
      <span className="text-3xl font-extrabold tracking-tight text-black">
        TechStation
      </span>
    </Link>
  );
};
