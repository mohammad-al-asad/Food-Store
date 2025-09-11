import type { Route } from "./+types/home";
import Nav from "../../components/Nav"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
<div>
  <Nav/>
</div>
  );
}
