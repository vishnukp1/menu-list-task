
import { FoodPage } from "../pages";

import { homePath} from "./route.constant";

const routes = [
  {
    path: homePath,
    component: FoodPage, 
    exact: true,
  },
 
];

export default routes;

