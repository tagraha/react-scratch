import Home from "./home";
import News from "./news";
import NotFound from "./404/NotFound";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/news",
    component: News
  },
  {
    path: "*",
    component: NotFound
  }
];

export default routes;