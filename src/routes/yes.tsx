import { createFileRoute } from "@tanstack/react-router";

import { Yes } from "../components/yes";

export const Route = createFileRoute("/yes")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Yes />;
}
