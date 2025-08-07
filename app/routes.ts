import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/:subpage?", "routes/home.tsx", [
    index("routes/empty.tsx"),
    route(":file", "routes/file.tsx"),
  ]),
] satisfies RouteConfig;
