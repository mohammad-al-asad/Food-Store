import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),route("/login","routes/login.tsx"),route("/blog","routes/blog.tsx"),route("/about","routes/about.tsx"),route("/pages","routes/pages.tsx"),route("/shop","routes/shop.tsx"),route("/product/:productId","routes/productPage.tsx")] satisfies RouteConfig;
